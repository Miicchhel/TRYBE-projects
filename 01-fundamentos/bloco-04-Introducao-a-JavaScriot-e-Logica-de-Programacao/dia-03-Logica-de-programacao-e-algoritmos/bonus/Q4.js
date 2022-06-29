let n = 5;
let cont = 0;
let saida = '';

//quantas linhas terão
for(let i = n ;i > 0; i -= 2){
  cont += 1;
}
//posicao 1º *: n-cont
let posicao = n-cont

for(let i = 0; i < cont; i++){
  for(let j = 0; j < n; j++){
    if(j !== posicao){
      saida += ' ';
    }else{
      saida += '*';
    }
  }
}
console.log(saida);
