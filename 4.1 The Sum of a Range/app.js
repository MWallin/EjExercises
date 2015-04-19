// Exercise 4.1 The Sum of a Range
/*

  The introduction of this book alluded to the following as a nice way to compute the sum
  of a range of numbers: console.log(sum(range(1, 10)));

  Write a range function that takes two arguments, start and end, and returns an
  array containing all the numbers from start up to (and including) end.

  Next, write a sum function that takes an array of numbers and returns the sum of these
  numbers. Run the previous program and see whether it does indeed return 55.

  As a bonus assignment, modify your range function to take an optional third argument
  that indicates the “step” value used to build up the array. If no step is given, the array
  elements go up by increments of one, corresponding to the old behavior. The function call
  range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step
  values so that range(5, 2, -1) produces [5, 4, 3, 2].

  console.log(sum(range(1, 10)));
  // → 55
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]

*/


Sum_Array(FillNumContainer(1, 10, 1));
//console.log(Sum_Array(FillNumContainer(1, 10, 1)));


function FillNumContainer(NumBegin, NumEnd, NumStep) {

  var NumContainer = [];


  if (typeof NumStep !== "number")
    NumStep = 1;


  if (NumStep < 0) {

    for (var Runs = NumBegin; Runs >= NumEnd; Runs += NumStep)
      NumContainer.push(Runs);

  }

  else if (NumStep > 0) {

    for (var Runs = NumBegin; Runs <= NumEnd; Runs += NumStep)
      NumContainer.push(Runs);

  }


  console.log("Array: " + NumContainer);

  return NumContainer;

}


function Sum_Array(NumArray) {

  var SumOfArray = 0;


  for (var Runs = 0; Runs < NumArray.length; Runs++) {

    SumOfArray += NumArray[Runs];

  }


  console.log("Sum of Array: " + SumOfArray);

  return SumOfArray;

}
