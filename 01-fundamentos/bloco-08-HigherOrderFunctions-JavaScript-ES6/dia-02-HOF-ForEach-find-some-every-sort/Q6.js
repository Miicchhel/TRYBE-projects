const books = require('./books');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s());