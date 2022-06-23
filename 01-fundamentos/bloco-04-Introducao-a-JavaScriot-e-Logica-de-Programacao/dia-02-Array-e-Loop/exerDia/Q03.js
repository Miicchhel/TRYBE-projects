import { numbers } from "./lista1-7.js";

let soma = 0;
let cont = 0
for(let i = 0; i < numbers.length; i++){
  cont += 1;
  soma += numbers[i];
}

export let media = soma/cont;
console.log(media);