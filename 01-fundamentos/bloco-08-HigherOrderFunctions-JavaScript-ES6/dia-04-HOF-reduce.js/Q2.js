const books = require('./books');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // return books.map((book) => book.author).reduce((atual, prox) => atual + prox.name,'');
  return books.reduce((atual, prox, index, array) => {
    if(index != array.length-1){
      return `${atual} ${prox.author.name},` 
    }
    return `${atual} ${prox.author.name}.` 
  },'');
}

console.log(reduceNames());