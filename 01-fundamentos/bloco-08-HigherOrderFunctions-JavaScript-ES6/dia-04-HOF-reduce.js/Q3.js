const books = require('./books');

const expectedResult = 43;

function averageAge() {

  // const arrayIdades = books.map((book) => (book.releaseYear - book.author.birthYear))
  // return arrayIdades.reduce((atual, proximo) => atual + proximo) / arrayIdades.length;

  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => {
    return sum + (book.releaseYear - book.author.birthYear)
  }, 0);

  return sumOfAges / numberOfBooks;
};

console.log(averageAge());