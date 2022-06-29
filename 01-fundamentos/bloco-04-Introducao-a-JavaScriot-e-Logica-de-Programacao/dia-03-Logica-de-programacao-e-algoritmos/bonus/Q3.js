let n = 5;
let saida = '';
let simbolo = '*'
let posicao = n;

for(let i = 0; i <= n; i++){
  for(let j = 0; j <= n; j++){
    if(j < posicao){
      saida += ' ';
    }else{
      saida += simbolo;
    }
  }
  console.log(saida)
  saida = '';
  posicao -= 1;
}