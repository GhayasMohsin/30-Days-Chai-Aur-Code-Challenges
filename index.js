/**
 * Activity 1: For loop
 */
//Task 1:
for (let i = 1; i < 11; i++) {
  console.log(i);
}

//Task 2:
for (let i = 1; i < 11; i++) {
  console.log(`${5} x ${i} = `, i * 5);
}
//-----------------------------------------------------

/**
 * Activity 2: While loop
 */
//Task 3:
let calNumbers = 0;
let i = 1;
while (i <= 10) {
  calNumbers = calNumbers + i;
  i++;
}
console.log(calNumbers);

//Task 4:
let decNumber = 10;
while (decNumber > 0) {
  console.log(decNumber);
  decNumber--;
}
//-----------------------------------------------------

/**
 * Activity 3: do-while loop
 */
//Task 5:
let doWhileNum = 1;
do {
  console.log(doWhileNum);
  doWhileNum++;
} while (doWhileNum <= 5);

//Task 6:
let counter = 1;
let doWhileFactorial = 6;
let value = 1;
do {
  value = counter * value;
  counter++;
} while (counter <= doWhileFactorial);
console.log(`Factorial for ${doWhileFactorial} is ${value}`);
//-----------------------------------------------------

/**
 * Activity 4: do-while loop
 */
//Task 7:
let stars = "";
for (let i = 1; i <= 5; i++) {
  stars += "*";
  console.log(stars);
}
//-----------------------------------------------------

/**
 * Activity 8: loop control statements
 */
//Task 8: skip number 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

//Task 9: stop at number 7
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}
