/**
 * Activity 1: Variable Declaration
 */

//Task 1: Declare a variable using var, assign it a number, and log the value to the console
var age; //variable declaration
age = 23; //variable initialization
console.log(age);

//Task 2: Declare a variable using let, assign it a number, and log the value to the console
let studentName; //variable declaration
studentName = 23; //variable initialization
console.log(studentName);

/**
 * Activity 2: Constant Declaration
 */
//Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console
const isStudentPresent = false;
console.log(isStudentPresent);

/**
 * Activity 3: Data Types
 */
//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using typeof operator
const isStudentAbscent = false;
let sName = "Ghayas Mohsin";
var sAge = 23;
let employee = {
  name: "Ghayas Mohsin",
  email: "ghayasmohsin@gmail.com",
  age: 23,
};
var employees = ["Ghayas", "Waqas", "Armaghan"];

console.log("typeof variable isStudentAbscent is: ", typeof isStudentAbscent);
console.log("typeof variable sName is: ", typeof sName);
console.log("typeof variable sAge is: ", typeof sAge);
console.log("typeof variable employee is: ", typeof employee);
console.log("typeof variable employees is: ", typeof employees);

/**
 * Activity 4: Reassigning Variables
 */
//Task 5: Declare a variable using let, assign it a value, reassign a new value, and log both values to the console
let empName = "Ghayas";
console.log(empName);
empName = "Ghayas Mohsin";
console.log(empName);

/**
 * Activity 5: Understanding const
 */
//Task 6: Try reassigning a variable declared with const and observe the error
const pioneerName = "Ghayas";
console.log(pioneerName);
pioneerName = "Ghayas Mohsin"; // Assignment to constant variable error.
console.log(pioneerName);

/**
 * Script for let and const: 
 *      variable let is mutable means we can declare the variable, then can assign the value and then also reassigns 
 *  the value to variable using let, CONST is immutable and the point of time we declare the const variable it is must 
 *  to initialize with value. As immutability refers to the fix value that cannot be changed value cannot be reassigned later.
 */
