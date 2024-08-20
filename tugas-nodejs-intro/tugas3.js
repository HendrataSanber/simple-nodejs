// Buat modul Node.js yang mengekspor fungsi untuk menjumlahkan dua angka, dan impor modul tersebut di file lain.
const addModule = require('./math');
a=2;
b=3;
console.log(a+" + "+b+" = "+addModule.tambah(a,b));
