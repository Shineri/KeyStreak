import express from 'express'; // Import the express module for creating the web server
//import { connect_database } from './config/DB.js'; // Import the database connection function from the configuration file
import userRoutes from "./routes/authRoutes.js";
import paragraphRoutes from "./routes/paragraphRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const port = process.env.PORT || 3300; 
const db_URL = process.env.DB_URL;
const app = express(); // Create an instance of the Express application

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
mongoose.connect(db_URL)
  .then(() => {
 // Setting API routes after successful database connection

 // A simple route to handle GET requests to the root URL
 console.log("Database connected successfully");
app.get("/", (req, res) => {
    return res.json({
		success:true,
		message:'Your server is up and running....'
	}); 
});
app.use("/api/v1/user", userRoutes);
app.use("/api/v2/paragraph",paragraphRoutes);



// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`App is listening at PORT ${port}`); // Log a message indicating the server is running
});

  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
    // Return response to the user if database connection fails
    app.get("/", (req, res) => {
      return res.status(500).json({ message: "Database connection failed" });
    });
    process.exit(1); // Exit the process if database connection fails
  });

