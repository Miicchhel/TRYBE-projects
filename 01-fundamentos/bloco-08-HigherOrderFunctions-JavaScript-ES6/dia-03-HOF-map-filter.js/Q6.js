const books = require('./books');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const anoAtual = new Date().getFullYear();
  return books.filter((book) => anoAtual - book.releaseYear > 60).map((livro) => livro.name)
}

console.log(oldBooks());