import { argv } from 'node:process';
import hex from 'ansis';
import randomColor from 'randomcolor';

let rColor;
let colorHue;
let colorLuminosity;

if (argv.length < 3) {
  rColor = randomColor();
} else {
  if (argv[2]) {
    colorHue = argv[2];
  }
  if (argv[3]) {
    colorLuminosity = argv[3];
  }
  rColor = randomColor({
    luminosity: colorLuminosity,
    hue: colorHue,
  });
}

printHash_31x3(rColor);
printHash_5Space5(rColor);
printHash_colorText(rColor);
printHash_5Space5(rColor);
printHash_31x3(rColor);

/*console.log(rColor);

console.log(hex(rColor)`${rColor}`);
console.log(rColor);*/

function printHash_31x3(color) {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 31; j++) {
      process.stdout.write(hex(color)`#`);
    }
    console.log('\n');
  }
}
function printHash_5Space5(color) {
  for (let j = 1; j <= 5; j++) {
    process.stdout.write(hex(color)`#`);
  }
  for (let j = 1; j <= 21; j++) {
    process.stdout.write(' ');
  }
  for (let j = 1; j <= 5; j++) {
    process.stdout.write(hex(color)`#`);
  }
  console.log('\n');
}
function printHash_5(color) {
  for (let j = 1; j <= 5; j++) {
    process.stdout.write(hex(color)`#`);
  }
}
function printSpace_7() {
  for (let j = 1; j <= 7; j++) {
    process.stdout.write(' ');
  }
}
function printHash_colorText(color) {
  printHash_5(color);
  printSpace_7();
  process.stdout.write(hex(color)`${color}`);
  printSpace_7();
  printHash_5(color);
  console.log('\n');
}
