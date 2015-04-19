// Exercise 4.2 Reversing an Array
/*

  Arrays have a method reverse, which changes the array by inverting the order in which its
  elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace.
  The first, reverseArray, takes an array as argument and produces a new array that has the same
  elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method
  does: it modifies the array given as argument in order to reverse its elements. Neither may
  use the standard reverse method.

  Thinking back to the notes about side effects and pure functions in the previous chapter,
  which variant do you expect to be useful in more situations? Which one is more efficient?

  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];

  var arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]

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
