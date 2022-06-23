import { numbers } from "./lista1-7.js";

let contador = 0;
let i = 0;

while(i < numbers.length){
  if(numbers[i]%2 != 0){
    contador += 1;
  }
  i += 1;
}

if(contador == 0){
  console("nenhum valor ímpar encontrado");
}
else{
  console.log(contador);
}