let word = 'trybe';
let newWord ='';
for (let index = word.length-1; index >= 0; index--) {
  const element = word[index];
  newWord+=element;
}
console.log(newWord)