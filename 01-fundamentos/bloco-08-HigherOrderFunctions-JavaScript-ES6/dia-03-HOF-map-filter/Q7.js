const books = require('./books');

const expectedResult = 'O Senhor dos Anéis';

// function authorWith3DotsOnName() {
//   return books.filter((book) => {
//     const nome = book.author.name.split(' ');
//     return nome[0].length === 2 && nome[1].length === 2 && nome[2].length === 2
//   })[0].name;
// }

// function authorWith3DotsOnName() {
//   return books.filter((book) => (
//     book.author.name[1] === '.'
//     && book.author.name[4] === '.'
//     && book.author.name[7] === '.'
//   ))[0].name;
// }

function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}
console.log(authorWith3DotsOnName());