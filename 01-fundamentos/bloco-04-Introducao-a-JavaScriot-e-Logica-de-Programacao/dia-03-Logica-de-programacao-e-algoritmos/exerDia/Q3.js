let array = ['java', 'javascript', 'python', 'html', 'css'];

let [maior, menor] = [array[0],array[0]];

for (let index = 1; index < array.length; index++) {
  //para o maior
  if(array[index].length > maior.length){
    maior = array[index]
  }
  //para o menor
  if(array[index].length < menor.length){
    menor = array[index]
  }
}

console.log(`maior: ${maior};\nmenor: ${menor}`);