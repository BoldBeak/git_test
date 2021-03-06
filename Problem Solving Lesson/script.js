
/* ******** ALGORITHM ********
  1. User inputs a number. (needs a min?)
  2. Program loops through numbers starting at  1 going to the user entered number
  3. If the number is divisible by 3, print "Fizz"
  4. If the number is divisible by 5, print "Buzz"
  5. If the number is divisible by **both**, print "FizzBuzz"
  6. If the number is divisible by **neither**, print the current number in the loop. */

// **** STEP 1: User Input ****
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
  // parseInt ensures the entered number is not interpreted as a string
  // prompt creates a pop up to ask for a number from the user

// **** STEP 2: Loop up to user input number ****
// tested loop and pop-up before moving forward

/* *** STEP 3: Print Fizz ***
    tested with "if (i % 3 === 0)" before moving forward. */
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  }

