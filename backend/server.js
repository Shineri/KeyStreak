import express from 'express'; // Import the express module for creating the web server
import { connect_database } from './config/DB.js'; // Import the database connection function from the configuration file

const port = process.env.PORT || 3300; // Define the port number, defaulting to 3300 if not specified in environment variables
const app = express(); // Create an instance of the Express application

// Connect to the database
connect_database();

// A simple route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello'); // Send a "Hello" message as the response
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`App is listening at PORT ${port}`); // Log a message indicating the server is running
});
