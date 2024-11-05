const Tiger = require('./Tiger'); // Perbaikan di sini
const Wolf = require('./Wolf');   // Perbaikan di sini

const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if (wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }

  console.log('Tiger and Wolf have the same strength');
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
