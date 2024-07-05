// src/app.js
const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');
const quoteRoutes = require('./routes/quotes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/quotes', quoteRoutes);


module.exports = app;
