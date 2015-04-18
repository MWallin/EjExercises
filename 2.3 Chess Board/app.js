// Exercise 2.3 Chess Board
/*
  Write a program that creates a string that represents an 8×8 grid, using newline characters to
  separate lines. At each position of the grid there is either a space or a “#” character. The
  characters should form a chess board.

  Passing this string to console.log should show something like this:

   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #

  When you have a program that generates this pattern, define a variable size = 8 and change
  the program so that it works for any size, outputting a grid of the given width and height.
 */




var BoardSize = "8";
var BoardOutput = "";
var BoardEvenCharacter = "¤";
var BoardOddCharacter = " ";


for (var rows = 1 ; rows <= BoardSize  ; rows++){

  for(var rowLine = 1 ; rowLine <= BoardSize ; rowLine++ ){

    if (rows % 2 !== 0){

      if (rowLine % 2 !== 0)
        BoardOutput += BoardEvenCharacter;

      else
        BoardOutput += BoardOddCharacter;

    }

    else
      if (rowLine % 2 === 0)
        BoardOutput += BoardEvenCharacter;

      else
        BoardOutput += BoardOddCharacter;


  }

  BoardOutput += "\n";

}

console.log(BoardOutput);


