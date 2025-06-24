// Uses express to integrate everything while handling the back end of the website.
// html, css and javascript is used inside the express code.

// Happy coding

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Calc</title>
    <style>
      * { box-sizing: border-box; font-family: sans-serif }
      body {
        margin: 0;
        padding: 0;
        background: #fff;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .wrap {
        width: 300px;
        border: 1px solid #ccc;
        padding: 15px;
        border-radius: 10px;
      }
      .out {
        height: 40px;
        background: #eee;
        text-align: right;
        padding: 10px;
        font-size: 1.2em;
        margin-bottom: 10px;
        border-radius: 5px;
      }
      .btns {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
      }
      button {
        padding: 12px;
        font-size: 1em;
        border: none;
        border-radius: 5px;
        background: #000;
        color: #fff;
        cursor: pointer;
      }
      button:hover {
        background: #333;
      }
      .eq { background: darkgreen }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="out" id="out">0</div>
      <div class="btns">
        <button onclick="add('7')">7</button>
        <button onclick="add('8')">8</button>
        <button onclick="add('9')">9</button>
        <button onclick="add('/')">/</button>

        <button onclick="add('4')">4</button>
        <button onclick="add('5')">5</button>
        <button onclick="add('6')">6</button>
        <button onclick="add('*')">*</button>

        <button onclick="add('1')">1</button>
        <button onclick="add('2')">2</button>
        <button onclick="add('3')">3</button>
        <button onclick="add('-')">-</button>

        <button onclick="add('0')">0</button>
        <button onclick="add('.')">.</button>
        <button class="eq" onclick="eq()">=</button>
        <button onclick="add('+')">+</button>

        <button onclick="add('(')">(</button>
        <button onclick="add(')')">)</button>
        <button onclick="add('^')">^</button>
        <button onclick="clr()">C</button>

        <button onclick="add('sin(')">sin</button>
        <button onclick="add('cos(')">cos</button>
        <button onclick="add('tan(')">tan</button>
        <button onclick="add('sqrt(')">√</button>

        <button onclick="add('log(')">log</button>
        <button onclick="add('ln(')">ln</button>
        <button onclick="del()">DEL</button>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.11.0/math.min.js"></script>
    <script>
      let x = '';
      const o = document.getElementById('out');

      const add = v => {
        x += v;
        o.innerText = x;
      };

      const eq = () => {
        try {
          x = math.evaluate(x).toString();
        } catch { x = 'Err' }
        o.innerText = x;
      };

      const clr = () => {
        x = '';
        o.innerText = '0';
      };

      const del = () => {
        x = x.slice(0, -1);
        o.innerText = x || '0';
      };
    </script>
  </body>
  </html>
  `);
});

app.listen(port, () => {
  console.log(`Running: http://localhost:\${port}`);
});
