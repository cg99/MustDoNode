// routes/quotes.js
const express = require('express');
const router = express.Router();

const quotes = [
  "Meditation is not a practice, it's a state of mind. You can do it.",
  "In the face of adversity. Don't tremble. Do what you got to do.",
  "Existence is not empty, it's spacious.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Your limitation—it's only your imagination."
];

router.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

module.exports = router;
