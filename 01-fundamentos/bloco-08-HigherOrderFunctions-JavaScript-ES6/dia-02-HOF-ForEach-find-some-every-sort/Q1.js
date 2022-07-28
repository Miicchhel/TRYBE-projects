const books = require('./books');

function authorBornIn1947() {

  const book = books.find((book) => book.author.birthYear === 1947);
  return book.author.name;

}

console.log(authorBornIn1947());