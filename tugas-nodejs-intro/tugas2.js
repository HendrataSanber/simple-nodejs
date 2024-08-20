// Buat server HTTP sederhana dengan Node.js yang merespons "Hello, World!" untuk setiap permintaan.
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});
