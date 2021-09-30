const express = require('express');
const connectDB = require('./src/config/db');
const dotenv = require('dotenv');
const app = express();

//ENV variables
dotenv.config({ path: './src/config/config.env' });

//DB connection
connectDB();

app.use(express.json());

const PORT = 5000;

const server = app.listen(PORT, console.log(`Server running on ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);

    // Close server and exit
    server.close(() => process.exit(1));
});