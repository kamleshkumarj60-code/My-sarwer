const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello! My Server is Live on Vercel 🚀');
});

app.get('/api', (req, res) => {
  res.json({ status: "ok", message: "Server working!" });
});

module.exports = app;
