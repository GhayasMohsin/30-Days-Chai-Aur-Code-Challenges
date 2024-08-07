/**
 * Activity 1: Array Creation and Access
 */

//Task 1:
let array = [1, 2, 3, 4, 5];
console.log(array);

//Task 2:
console.log(`first element is ${array[0]}`);
console.log(`last element is ${array[array.length - 1]}`);
//---------------------------------------------------------------------------------------

/**
 * Activity 2: Array Methods (Basic)
 */
//Task 3:
array.push(6);
console.log("Add element in the last", array);

//Task 4:
array.pop();
console.log("remove element in the last", array);

//Task 5:
array.shift();
console.log("remove element from the start", array);

//Task 6:
array.unshift(1);
console.log("Add element in the start", array);
//---------------------------------------------------------------------------------------

/**
 * Activity 3: Array Methods (Intermediate)
 */
//Task 7:
console.log(
  "Array doubled using map:",
  array.map((ele) => ele * 2)
);

//Task 8:
console.log(
  "Filter array for even numbers:",
  array.filter((ele) => ele % 2 === 0)
);

//Task 9:
console.log(
  "Reduce array for to sum all numbers:",
  array.reduce((acc, ele) => (sum = sum + ele), (sum = 0))
);
//---------------------------------------------------------------------------------------

/**
 * Activity 4: Array Iteration
 */
//Task 10:
for (let index = 0; index < array.length; index++) {
  console.log("Using for loop", array[index]);
}

//Task 11:
array.forEach((element) => {
  console.log("Using forEach loop", element);
});
//---------------------------------------------------------------------------------------

/**
 * Activity 5: Multi-dimensional Arrays
 */
//Task 12:
let twoDimentionalArray = [
  ["Ghayas", "Mohsin"],
  ["Waqas", "Yaqoob"],
  ["Armaghan", "Rasheed"],
];
console.log(twoDimentionalArray);

//Task 13:
console.log(twoDimentionalArray[1][0])