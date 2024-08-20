// Buat program Node.js sederhana yang membaca file teks dan mencetak isinya ke konsol.
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
