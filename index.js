/**
 * Activity 1: Template literals
 */
//Task 1:
let personName = "Ghayas Mohsin";
let personAge = 22;
let tempLiteralStr = `${personName} is an associate software engineer at the age ${personAge}.`;
console.log(tempLiteralStr);

//Task 2:
console.log(
  `AsalamuAlaikum, brother 
hopeso you are
doing well`
);
//--------------------------------------------------------------------------------

/**
 * Activity 2: Destructuring
 */
//Task 3:
let array = [1, 2, 3, 4];
let [firstIndex, secondIndex] = array;
console.log(`First index: ${firstIndex}, second Index: ${secondIndex}`);

//Task 4:
let book = {
  title: "ABC",
  author: "Chandio",
  price: 870,
  year: "2018",
};
let { title, author } = book;
console.log(`Title: ${title}, author: ${author}`);
//--------------------------------------------------------------------------------

/**
 * Activity 3: Spread and Rest Operators
 */
//Task 5:
let newArray = [...array, 5, 6];
console.log("New Array using spread operator:", newArray);

//Task 6:
let restFunction = function (...params) {
  let sum = 0;
  params.forEach((param) => (sum = sum + param));
  return sum;
};
console.log(restFunction(50, 100, 50));
//--------------------------------------------------------------------------------

/**
 * Activity 4: Default Parameters
 */
//Task 7:
let defaultParamFnc = (a, b = 1) => a * b;
console.log(defaultParamFnc(2));
console.log(defaultParamFnc(2, 4));
//--------------------------------------------------------------------------------

/**
 * Activity 5: Enhanced Object Literals
 */
//Task 8:
let enhancedLiteral = {
  name: "Ghayas Mohsin",
  age: 22,
  designation: "Associate Software Engineer",
  getDetails: function () {
    return this.name + " " + this.designation;
  },
};
console.log(enhancedLiteral);

//Task 9:
let firstName = "Ghayas",
  lastName = "Mohsin";

let computedPropObj = {};
computedPropObj[firstName + lastName] = "Ghayas Mohsin";
console.log(computedPropObj);
