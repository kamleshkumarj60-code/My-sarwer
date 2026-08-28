const express = require('express');
const app = express();

function getResult() {
  const colors = ['Red', 'Green', 'Violet'];
  const sizes = ['Big', 'Small'];
  return {
    number: Math.floor(Math.random() * 10),
    color: colors[Math.floor(Math.random() * colors.length)],
    size: sizes[Math.floor(Math.random() * sizes.length)]
  };
}

let currentResult = getResult();
let lastMinute = new Date().getMinutes();

app.get('/', (req, res) => {
  res.send(`
    <h1 style="text-align:center">Madara Uchiha - 82 Lottery (1 MIN) LIVE 🔥</h1>
    <p style="text-align:center">Period: ${new Date().toISOString().slice(0,10).replace(/-/g,'')}${10001 + new Date().getHours()*60 + new Date().getMinutes()}</p>
    <div style="text-align:center">
      <a href="/api/result"><button style="padding:20px;font-size:20px;background:green;color:white;border-radius:10px;">PREDICTION NIKALO (1 MIN)</button></a>
    </div>
    <p style="text-align:center" id="timer">Next result in: <span id="sec">60</span>s</p>
    <script>
      let s=60; setInterval(()=>{ s--; if(s<=0) location.reload(); document.getElementById('sec').innerText=s; },1000);
    </script>
  `);
});

app.get('/api/result', (req, res) => {
  const now = new Date();
  if(now.getMinutes() !== lastMinute){
    currentResult = getResult();
    lastMinute = now.getMinutes();
  }
  res.json({
    owner: "Madara Uchiha",
    game: "1 Minute",
    period: `${now.toISOString().slice(0,10).replace(/-/g,'')}${10001 + now.getHours()*60 + now.getMinutes()}`,
    ...currentResult,
    time: now.toLocaleString("en-IN", {timeZone: "Asia/Kolkata"})
  });
});

module.exports = app;
