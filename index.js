import { argv, exit } from 'node:process';
import { hex } from 'ansis';
import randomColor from 'randomcolor';

let rColor;
let hue;
let luminosity;
const hueArr = ['green', 'red', 'blue'];
const luminosityArr = ['light', 'dark'];

if (argv.length < 3) {
  rColor = randomColor();
} else {
  hue = argv[2]?.toLowerCase();
  luminosity = argv[3]?.toLowerCase();

  const invalidHue = hue && !hueArr.includes(hue);
  const invalidLuminosity = luminosity && !luminosityArr.includes(luminosity);

  if (invalidHue || invalidLuminosity) {
    if (invalidHue) {
      console.log(`Please give a hue of ${hueArr.join(' or ')}`);
    }
    if (invalidLuminosity) {
      console.log(`Please give a luminosity of ${luminosityArr.join(' or ')}`);
    }
    exit(1);
  }

  rColor = randomColor({
    luminosity: luminosity,
    hue: hue,
  });
}
printBlock31x9Char('#', rColor);

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
  process.stdout.write('\n');
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
  process.stdout.write('\n');
  /* Print a line of 5 given characters colored with this color */
  printCharLine(char, color, 5);
  /* Print a line of 21 spaces */
  printCharLine(' ', undefined, 21);
  /* Print a line of 5 given characters colored with this color */
  printCharLine(char, color, 5);
  /* Print a newline */
  process.stdout.write('\n');
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
    process.stdout.write('\n');
  }
}

/* Print a string colored with a given color */
function printString(str, color) {
  process.stdout.write(hex(color)`${str}`);
}
