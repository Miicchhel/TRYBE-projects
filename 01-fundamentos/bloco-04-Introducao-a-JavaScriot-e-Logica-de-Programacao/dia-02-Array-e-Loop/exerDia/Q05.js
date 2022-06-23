import { numbers } from "./lista1-7.js";

let maior = 0;
for(let i = 0; i < numbers.length; i++){
  if(maior < numbers[i]){
    maior = numbers[i]
  }
}

console.log(maior)