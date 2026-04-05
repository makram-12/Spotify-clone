import mongoose from "mongoose";

const connnectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("connection established");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/songs`);

}

export default connnectDB;