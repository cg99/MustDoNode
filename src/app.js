// src/app.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/quotes', require('./routes/quotes'));
app.use('/api/auth', require('./routes/auth')); // Register the auth routes


module.exports = app;
