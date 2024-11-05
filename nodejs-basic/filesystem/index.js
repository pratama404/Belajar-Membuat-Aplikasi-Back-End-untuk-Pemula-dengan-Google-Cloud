const fs = require('fs');
const path = require('path');

// Menentukan path file notes.txt di direktori saat ini
const filePath = path.resolve(__dirname, 'notes.txt');

// TODO: Tampilkan teks pada notes.txt pada console
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Gagal membaca file:', err);
    } else {
      console.log('Isi dari notes.txt:');
      console.log(data);
    }
  });