const books = require('./books');

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => a.releaseYear - b.releaseYear);
}
booksOrderedByReleaseYearDesc()
console.log(books)
