import mongoose from "mongoose";

let listenersRegistered = false;

const connnectDB = async (maxRetries = 5, retryDelayMs = 5000) => {
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing");
    }

    if (!listenersRegistered) {
        mongoose.connection.on('connected', () => {
            console.log("MongoDB: connection established");
        });

        mongoose.connection.on('disconnected', () => {
            console.warn("MongoDB: disconnected");
        });

        mongoose.connection.on('error', (error) => {
            console.error("MongoDB: connection error", error.message);
        });

        listenersRegistered = true;
    }

    let lastError;
    for (let attempt = 1; attempt <= maxRetries; attempt += 1) {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: process.env.MONGODB_DB_NAME || 'songs',
                serverSelectionTimeoutMS: 10000
            });
            return;
        } catch (error) {
            lastError = error;
            console.error(`MongoDB: attempt ${attempt}/${maxRetries} failed - ${error.message}`);

            if (attempt < maxRetries) {
                await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
            }
        }
    }

    throw lastError;
}

export default connnectDB;