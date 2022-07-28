const books = require('./books');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // return books.map((book) => book.name)
  // .reduce((maior, proximo) => (maior.length > proximo.length) ? maior : proximo);

  return books.reduce((maior, proximo) => (maior.name.length > proximo.name.length) ? maior : proximo);
}

console.log(longestNamedBook());