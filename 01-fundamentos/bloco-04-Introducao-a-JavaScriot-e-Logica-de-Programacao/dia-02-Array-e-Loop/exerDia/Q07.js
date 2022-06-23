import { numbers } from "./lista1-7.js";

let menor = numbers[0];
for(let i = 1; i < numbers.length; i++){
  if(numbers[i] < menor){
    menor = numbers[i]
  }
}
console.log(menor)