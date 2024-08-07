/**
 * Activity 1: Object Creation and Access
 */
//Task 1:
let book = {
  title: "7 Habits of successful people",
  author: "Armaghan Rasheed",
  year: "2015",
};
console.log(book);

//Task 2:
console.log("Title of book is", book.title);
console.log("Author of book is", book.author);
//--------------------------------------------------------------------------------

/**
 * Activity 2: Object Methods
 */
//Task 3:
book.details = () =>
  console.log(`Book is titled as ${book.title}, written by ${book.author}`);
book.details();

//Task 4:
book.updateYear = function (yr) {
  this.year = yr;
};
book.updateYear(2018);
console.log(book);
//--------------------------------------------------------------------------------

/**
 * Activity 3: Nested Objects
 */
//Task 5:
let library = {
  name: "AB",
  books: [
    {
      title: "7 Habits of successful people",
      author: "Armaghan Rasheed",
      year: "2015",
    },
    {
      title: "HereAfter",
      author: "Muhammad Abdullah",
      year: "2019",
    },
  ],
};
console.log("Library", library);

//Task 6:
console.log(`${library.name} is very popular library`);
library.books.forEach((book) =>
  console.log(`Book entitled ${book.title} is best among others.`)
);
//--------------------------------------------------------------------------------

/**
 * Activity 4: This keyword
 */
//Task 7:
book.getDetailsByThis = function () {
  return `Book ${this.title}, published in ${this.year} is recommended to read.`;
};
console.log(book.getDetailsByThis());
//--------------------------------------------------------------------------------

/**
 * Activity 5: Object Iteration
 */
//Task 8:
for (const key in book) {
  console.log(`Object key: ${key}, object value: ${book[key]}`);
}

//Task 9:
console.log(Object.keys(book));
console.log(Object.values(book));
