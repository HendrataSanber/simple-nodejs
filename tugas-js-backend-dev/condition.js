const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan angka (1-7): ', (input) => {
  const angka = parseInt(input);

  if(angka%2){
      console.log("Angka tersebut adalah ganjil");
  }
  else{
      console.log("Angka tersebut adalah genap");
  }

  switch (angka) {
    case 1:
      console.log('Senin');
      break;
    case 2:
      console.log('Selasa');
      break;
    case 3:
      console.log('Rabu');
      break;
    case 4:
      console.log('Kamis');
      break;
    case 5:
      console.log('Jumat');
      break;
    case 6:
      console.log('Sabtu');
      break;
    case 7:
      console.log('Minggu');
      break;
    default:
      console.log('Angka tidak sesuai');
  }

  rl.close();
});