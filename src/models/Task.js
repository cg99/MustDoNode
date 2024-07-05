// src/models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  taskType: {
    type: String,
    enum: ['dailyEngagement', 'regular', 'notToDo', 'note'],
    default: 'regular'
  }
});

module.exports = mongoose.model('Task', taskSchema);
