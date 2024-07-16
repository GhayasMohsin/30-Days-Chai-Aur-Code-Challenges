/**
 * Activity 1: Arithmetic Operations
 */

//Task 1: Adding two numbers and logging the result to console.
let addNum1 = 23;
let addNum2 = 45;
console.log("addNum1 + addNum2 = ", addNum1 + addNum2);

//Task 2: Subtracting two numbers and logging the result to console.
let subNum1 = 23;
let subNum2 = 20;
console.log("subNum1 - subNum2 = ", subNum1 - subNum2);

//Task 3: Multiply two numbers and logging the result to console.
let mulNum1 = 3;
let mulNum2 = 20;
console.log("mulNum1 * mulNum2 = ", mulNum1 * mulNum2);

//Task 4: Divide two numbers and logging the result to console.
let divNum1 = 20;
let divNum2 = 5;
console.log("divNum1 / divNum2 = ", divNum1 / divNum2);

//Task 5: Remainder for two numbers and logging the result to console.
let remNum1 = 20;
let remNum2 = 3;
console.log("remNum1 % remNum2 = ", remNum1 % remNum2);

//------------------------------------------------------------------

/**
 * Activity 2: Assignment Operator
 */
//Task 6: Use the += operator to add a number to a variable and log the result to the console
let employeeCount = 10;
employeeCount += 12;
console.log("employeeCount = ", employeeCount);

//Task 7: Use the -= operator to subtract a number to a variable and log the result to the console
let layOffCount = 12;
layOffCount -= 2;
console.log("layOffCount = ", layOffCount);

//------------------------------------------------------------------

/**
 * Activity 3: Comparison Operators
 */
//Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log("Number 23 > Number 20 = ", 23 > 20);
console.log("Number 23 < Number 20 = ", 23 < 20);

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log("Number 23 >= Number 23 = ", 23 >= 23);
console.log("Number 23 <= Number 20 = ", 23 <= 20);
console.log("Number 20 <= Number 20 = ", 20 <= 20);

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.
// ==
console.log("(23 == '23') ? ", 23 == "23");
console.log("(23 == 23) ? ", 23 == 23);
console.log("(23 == 'abc') ", 23 == "abc");
console.log("undefined == null ? ", undefined == null);

// ===
console.log("(23 === '23') ? ", 23 === "23");
console.log("(23 === 23) ? ", 23 === 23);
console.log("(23 === 'abc') ", 23 === "abc");
console.log("(undefined === null) ? ", undefined === null);

//------------------------------------------------------------------

/**
 * Activity 4: Logical Operators
 */
//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console
let firstName = "Ghayas";
let age = null;
if (typeof firstName === "string" && typeof age === "number")
  console.log("&& condition fulfilled");
else console.log("&& condition not fulfilled");

let empName = "Ghayas";
let empAge = 2;
if (typeof empName === "string" && typeof empAge === "number")
  console.log("&& condition fulfilled");
else console.log("&& condition not fulfilled");

//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console
let fName = "Ghayas";
let fAge = null;
if (typeof fName === "string" || typeof fAge === "number")
  console.log("|| condition fulfilled");
else console.log("|| condition not fulfilled");

let empfName = null;
let empfAge = null;
if (empfName || empfAge) console.log("|| condition fulfilled");
else console.log("|| condition not fulfilled");

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console
let isPresent = false;
if (!isPresent) console.log("Student not present");
isPresent = !isPresent;
console.log("isPresent after negatation is ", isPresent);

//------------------------------------------------------------------

/**
 * Activity 5: Ternary Operator
 */
//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
let nmbr = 20;
nmbr > 0
  ? console.log(`number ${nmbr} is positive.`)
  : console.log(`number ${nmbr} is negative.`);
nmbr = -2;
nmbr > 0
  ? console.log(`number ${nmbr} is positive.`)
  : console.log(`number ${nmbr} is negative.`);
