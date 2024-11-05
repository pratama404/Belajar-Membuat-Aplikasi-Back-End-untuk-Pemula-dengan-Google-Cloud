const fs = require('fs');
const path = require('path');

// Menetapkan jalur berkas notes.txt
const notesPath = path.resolve(__dirname, 'input.txt');

// Membaca dan menampilkan isi dari notes.txt
fs.readFile(notesPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Isi dari notes.txt:');
    console.log(data);
});
