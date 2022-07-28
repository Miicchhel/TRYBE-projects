const books = require('./books');

const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) => {
      // console.log(`bookSome: ${bookSome.author.birthYear} ? book: ${book.author.birthYear}`)
      return (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)}
    ));
}

console.log(authorUnique());