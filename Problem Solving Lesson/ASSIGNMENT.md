# Solving Fizz Buzz
## 1. Understand the Problem

"Fizz Buzz" is a math game used to teach the concept of division, usually to a group. Fizz becomes a variable for 3 and Buzz a variable for 5. Students count up by one on their turn substuting the word "fizz" if the number for their turn is divisible by 3, "buzz" if it is divisible by 5, or "fizzbuzz" if it is divisible by both.


## 2. Plan

<q>Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.</q>\

### Planning Questions
- Does your program have an interface?
-- No. This will be done in the command line. The only user interaction will be to enter a number.
- What inputs will the program have? Does it come from the user or elsewhere?
  - User will enter a number in the command line.
- What's the desired output?
  - a list of numbers starting at one going to the user's entered number BUT each number divisible by 3 is replaced by "Fizz", numbers divisible by 5 are replaced by "Buzz", and numbers divisible by both are replaced by "FizzBuzz"
- Given your inputs, what are the steps  necessary to return the desired output?
  - see Pseudo Code/Algorithm below

#### Pseudo Code/Algorithm
1. User inputs a number. (needs a min?)
2. Program loops through numbers starting at 1 going to the user entered number
3. If the number is divisible by 3, print "Fizz"
4. If the number is divisible by 5, print "Buzz"
5. If the number is divisible by **both**, print "FizzBuzz"
6. If the number is divisible by **neither**, print the current number in the loop.



