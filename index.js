import { argv, exit } from 'node:process';
import ansis, { hex } from 'ansis';
import randomColor from 'randomcolor';

let rColor;
let hue;
let luminosity;
const hueArr = ['green', 'red', 'blue'];
const luminosityArr = ['light', 'dark'];

if (argv.length < 3) {
  rColor = randomColor();
} else {
  if (argv[2]) {
    hue = argv[2].toLowerCase();
  }
  if (argv[3]) {
    luminosity = argv[3].toLowerCase();
  }
  if (
    hue &&
    !hueArr.includes(hue) &&
    luminosity &&
    !luminosityArr.includes(luminosity)
  ) {
    process.stdout.write('Please give a hue of ');
    console.log(hueArr.join(' or '));
    process.stdout.write('Please give a luminosity of ');
    console.log(luminosityArr.join(' or '));
    exit(1);
  } else if (hue && !hueArr.includes(hue)) {
    process.stdout.write('Please give a hue of ');
    console.log(hueArr.join(' or '));
    exit(1);
  } else if (luminosity && !luminosityArr.includes(luminosity)) {
    process.stdout.write('Please give a luminosity of ');
    console.log(luminosityArr.join(' or '));
    exit(1);
  }
  rColor = randomColor({
    luminosity: luminosity,
    hue: hue,
  });
}
printBlock31x9Char('#', rColor);
/*console.log(rColor);*/

/* Print a block of 31x9 given characters colored with a given color */
function printBlock31x9Char(char, color) {
  /* Print a block of 31x3 given characters colored with this color */
  printCharBlock(char, color, 31, 3);
  /* Print a line of 5 given characters colored with this color */
  printCharLine(char, color, 5);
  /* Print a line of 21 spaces */
  printCharLine(' ', undefined, 21);
  /* Print a line of 5 given characters colored with this color */
  printCharLine(char, color, 5);
  /* Print a newline */
  console.log('\n');
  /* Print a line of 5 given characters colored with this color */
  printCharLine(char, color, 5);
  /* Print a line of 7 spaces */
  printCharLine(' ', undefined, 7);
  /* Print a hex color code colored with this color */
  printString(color, color);
  /* Print a line of 7 spaces */
  printCharLine(' ', undefined, 7);
  /* Print a line of 5 given characters colored with this color */
  printCharLine(char, color, 5);
  /* Print a newline */
  console.log('\n');
  /* Print a line of 5 given characters colored with this color */
  printCharLine(char, color, 5);
  /* Print a line of 21 spaces */
  printCharLine(' ', undefined, 21);
  /* Print a line of 5 given characters colored with this color */
  printCharLine(char, color, 5);
  /* Print a newline */
  console.log('\n');
  /* Print a block of 31x3 given characters colored with this color */
  printCharBlock(char, color, 31, 3);
}

/* Print a line of n characters colored with a given color*/
function printCharLine(char, color, n) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write(hex(color)`${char}`);
  }
}

/* Print a block n*m characters colored with a given color */
function printCharBlock(char, color, n, m) {
  for (let i = 1; i <= m; i++) {
    printCharLine(char, color, n);
    console.log('\n');
  }
}

/* Print a string colored with a given color */
function printString(str, color) {
  process.stdout.write(hex(color)`${str}`);
}
