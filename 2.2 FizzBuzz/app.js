// Exercise 2.2
/*
  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
  For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5
  (and not 3), print "Buzz" instead.

  When you have that working, modify your program to print "FizzBuzz", for numbers that are
  divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible
  by only one of those).

  (This is actually an interview question that has been claimed to weed out a significant
  percentage of programmer candidates. So if you solved it, you’re now allowed to feel
  good about yourself.)

 */




//var printline = "#"

for (var runs = 1 ; runs <= 21  ; runs++){

  //if number is only divideble by 3
  if(runs % 3 == 0 && runs % 5 != 0 ){

    console.log(runs + ": Fizz");

  }


  //if number is only divideble by 5
  if(runs % 5 == 0 && runs % 3 != 0 ){

    console.log(runs + ": Buzz");

  }


  //if number is only divideble by 5
  if(runs % 5 == 0 && runs % 3 == 0 ){

    console.log(runs + ": FizzBuzz");

  }


  //if number is not divideble by 3 or 5
  if(runs % 3 != 0 && runs % 5 != 0 ){

    console.log(runs)

  }


}
