class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    console.log('owooooo!');
  }
}

// TODO 2: Ekspor kelas Wolf, bukan instance
module.exports = Wolf;
