import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connnectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000;


// test change
const x = 2;
//middleware
app.use(express.json());
app.use(cors());

// intializeing routes
app.use("/api/song",songRouter);
app.use('/api/album',albumRouter);

app.get('/health', (req, res) => res.status(200).json({ ok: true }));
app.get('/',(req,res)=> res.send("API Working"));

process.on('unhandledRejection', (error) => {
	console.error('Unhandled promise rejection:', error);
});

process.on('uncaughtException', (error) => {
	console.error('Uncaught exception:', error);
});

const startServer = async () => {
	app.listen(port, "0.0.0.0", ()=>console.log(`Server started on ${port}`));

	try {
		await connnectDB();
	} catch (error) {
		console.error("Initial MongoDB connection failed:", error.message);
	}

	try {
		await connectCloudinary();
	} catch (error) {
		console.error("Cloudinary configuration failed:", error.message);
	}
}

startServer();