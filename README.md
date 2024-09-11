# Random Color Generator

An application that will return a random color in the command line.

When a user enters `node index.js` in the command line, a block of 31x9 `#` characters colored with a random color (using hex code, e.g. `#ff0000`) should be generated.

It should look like this:

![Screen Shot 2020-09-09 at 15 53 33](https://user-images.githubusercontent.com/1935696/92607675-b56bd700-f2b4-11ea-9085-67af9369fa71.png)

In addition to `node index.js`, it should also be able to accept the request for a:

- hue (eg. green or red or blue)
- luminosity (eg. light or dark)

...and then generate random colors that match those choices.

For example:

![Screen Shot 2020-09-09 at 15 54 42](https://user-images.githubusercontent.com/1935696/92607766-daf8e080-f2b4-11ea-9d6d-3bd8501da443.png)

When the color hue or luminosity are incorrect, an error message will be printed out.

TODO:

- [x] search in library a package to generate random color
- [x] figure out how to randomize the color

- [x] get user input
- [x] figure out how to print color based on user input
- [x] print the block 31x9 `#` characters colored with the random color
- [] print an error message out, when the color hue or luminosity are incorrect.
  hue (eg. green or red or blue)
  luminosity (eg. light or dark)
