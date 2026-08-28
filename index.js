const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1 style="text-align:center">Madara Uchiha - 82 Lottery Server LIVE 🔥</h1>
    <div style="text-align:center">
      <a href="/api/result"><button style="padding:20px;font-size:20px;background:green;color:white;border-radius:10px;">PREDICTION NIKALO</button></a>
    </div>
    <p style="text-align:center">Note: Ye Random Demo hai</p>
  `);
});

app.get('/api/result', (req, res) => {
  const colors = ['Red', 'Green', 'Violet'];
  const sizes = ['Big', 'Small'];
  res.json({
    owner: "Madara Uchiha",
    number: Math.floor(Math.random() * 10),
    color: colors[Math.floor(Math.random() * colors.length)],
    size: sizes[Math.floor(Math.random() * sizes.length)],
    time: new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"})
  });
});

module.exports = app;
