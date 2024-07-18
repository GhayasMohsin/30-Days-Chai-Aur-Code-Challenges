/**
 * Activity 1: If-Else statements
 */

//Task 1: Write a program to check if a number is positive, negative, or zero, and log the results to the console.
let num = 0;
if (num == 0) {
  console.log(`${num} is zero`);
}
if (num > 0) {
  console.log(`${num} is positive`);
}
if (num < 0) {
  console.log(`${num} is negative`);
}

//Task 2: Write a program to check if a person is eligible to vote (age>=18), and log the results to the console.
let age = 25;
if (age >= 18) {
  console.log(`Person of age ${age} is eligible to vote`);
} else {
  console.log(`Person of age ${age} is not eligible to vote`);
}

//------------------------------------------------------------------------------------------------------------------

/**
 * Activity 2: Nested If-Else statements
 */
//Task 3: Write a program to find the largest of 3 numbers using nested if-else statements.
let a = 10,
  b = 12,
  c = 13;

if (a > b && a > c) {
  console.log(`${a} is greater than ${b} and ${c}`);
} else if (b > a && b > c) {
  console.log(`${b} is greater than ${a} and ${c}`);
} else if (c > a && c > b) {
  console.log(`${c} is greater than ${a} and ${b}`);
}

//------------------------------------------------------------------------------------------------------------------

/**
 * Activity 3: Switch Case
 */
//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console
const dayNumber = 4;
switch (dayNumber) {
  case 1:
    console.log("Day of week: Monday");
    break;
  case 2:
    console.log("Day of week: Tuesday");
    break;
  case 3:
    console.log("Day of week: Wednesday");
    break;
  case 4:
    console.log("Day of week: Thursday");
    break;
  case 5:
    console.log("Day of week: Friday");
    break;
  case 6:
    console.log("Day of week: Saturday");
    break;
  case 7:
    console.log("Day of week: Sunday");
    break;
  default:
    break;
}

//Task 5: Write a program that uses a switch case to assign the grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
const score = 90;
switch (true) {
  case score >= 80:
    console.log(`Grade of score ${score} is A.`);
    break;
  case score >= 70 && score < 80:
    console.log(`Grade of score ${score} is B.`);
    break;
  case score >= 50 && score < 70:
    console.log(`Grade of score ${score} is C.`);
    break;
  case score >= 33 && score < 50:
    console.log(`Grade of score ${score} is D.`);
    break;
  case score < 33:
    console.log(`Grade of score ${score} is F.`);
    break;
  default:
    break;
}

//------------------------------------------------------------------------------------------------------------------

/**
 * Activity 4: Conditional (Ternary Operator)
 */
//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the cons0le.
let evenOrOddNumber = 12;
evenOrOddNumber % 2 === 0
  ? console.log(`${evenOrOddNumber} is even.`)
  : console.log(`${evenOrOddNumber} is odd.`);

//------------------------------------------------------------------------------------------------------------------

/**
 * Activity 5: Combining Conditions
 */
//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 less unless also divisible by 400) and log the result to the console.
let year = new Date().getFullYear();
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
