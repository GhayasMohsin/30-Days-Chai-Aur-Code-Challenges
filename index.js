/**
 * Activity 1: Function Declaration
 */
//Task 1:
function evenOddFunction(num) {
  num % 2 === 0
    ? console.log(`Number ${num} is even`)
    : console.log(`Number ${num} is odd`);
}
evenOddFunction(34);

//Task 2:
let number = 12;
function calculateSquare(num) {
  return num * num;
}
console.log(`Square of ${number} is`, calculateSquare(number));
//-------------------------------------------------------------------------

/**
 * Activity 2: Function Expression
 */
//Task 3:
const maxNumber = function (n1, n2) {
  return n1 > n2
    ? console.log(`${n1} is maximum`)
    : console.log(`${n2} is maximum`);
};
maxNumber(22, 4);

//Task 4:
let string1 = "Ghayas";
let string2 = " Mohsin";
const concatString = function (str1, str2) {
  return str1 + str2;
};
console.log(concatString(string1, string2));
//-------------------------------------------------------------------------

/**
 * Activity 3: Arrow Functions
 */
//Task 5:
let sum = (n1, n2) => n1 + n2;
console.log(sum(2, 4));

//Task 6:
let isExists = (s1, s2) => s1.includes(s2);
console.log(isExists("Ghayas Mohsin", "str"));
//-------------------------------------------------------------------------

/**
 * Activity 4: Function Parameters and Default Values
 */
//Task 7:
let defaultProduct = (d1, d2 = 5) => d1 * d2;
console.log(defaultProduct(1));

//Task 8:
let defaultPerson = (pName, pAge = 18) =>
  `AsalamuAlaikum ${pName}! Welcome to our company. your age ${pAge} best suits this position.`;
console.log(defaultPerson("Ghayas"));
//-------------------------------------------------------------------------

/**
 * Activity 5: Higher-Order Functions
 */
//Task 9:
function higherOrderFunction(fnc, nmbr) {
  for (let index = 0; index < nmbr; index++) {
    fnc();
  }
}
higherOrderFunction(() => {
  console.log("Ghayas Mohsin is a backend developer");
}, 10);

//Task 10:
function higherOrderT2(fnc1, func2, nmbr) {
  let res = fnc1(nmbr);
  func2(res);
}
higherOrderT2(
  (n) => n * n,
  (r) => console.log(`${r} is the final result`),
  10
);
