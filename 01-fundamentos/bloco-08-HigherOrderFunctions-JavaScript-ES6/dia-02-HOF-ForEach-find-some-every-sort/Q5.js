const books = require('./books');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => (
    book.author.birthYear > 1900 && book.author.birthYear <= 2000
  ));
}

console.log(everyoneWasBornOnSecXX());

// function everyoneWasBornOnYear(year) {
//   return books.every((book) => book.author.birthYear === year);
// }
// console.log(everyoneWasBornOnYear(1920));