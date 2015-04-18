// Exercise 3.1 Minimum
/*
  The previous chapter introduced the standard function Math.min that returns its
  smallest argument. We can do that ourselves now. Write a function min that takes
  two arguments and returns their minimum.


  console.log(min(0, 10));
  → 0
  console.log(min(0, -10));
  → -10
*/


function SmallestNumber(Num1, Num2) {

  if (Num1 < Num2) {
    return Num1;
  }

  return Num2;

}


console.log(SmallestNumber(0, 10));
