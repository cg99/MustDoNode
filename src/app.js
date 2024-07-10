// src/app.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

console.log(process.env.CLIENT_URL);

// CORS configuration
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token'], // Add custom headers
};

app.use(cors(corsOptions));

// Enable pre-flight for all routes
app.options('*', cors(corsOptions));

app.use(express.json());

app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/quotes', require('./routes/quotes'));
app.use('/api/auth', require('./routes/auth')); // Register the auth routes


module.exports = app;
