// src/app.js
const express = require('express');
const cors = require('cors');

const app = express();

// CORS configuration
const corsOptions = {
    origin: [`${process.env.CLIENT_URL}}`],
    optionsSuccessStatus: 200
  };
  

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/quotes', require('./routes/quotes'));
app.use('/api/auth', require('./routes/auth')); // Register the auth routes


module.exports = app;
