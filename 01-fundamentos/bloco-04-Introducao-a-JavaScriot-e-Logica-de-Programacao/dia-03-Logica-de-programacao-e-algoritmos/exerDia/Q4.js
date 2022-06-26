let n = 50
let maior = 0

for (let i = 2; i <= n; i++) {
  let cont = 0;
  for(let j = 1; j <= i; j++){
    if (i % j === 0){
      cont += 1;
      if(cont > 2){
        break
      }
    }
  }
  if(cont === 2){
    maior = i;
  }
}
console.log(maior);
