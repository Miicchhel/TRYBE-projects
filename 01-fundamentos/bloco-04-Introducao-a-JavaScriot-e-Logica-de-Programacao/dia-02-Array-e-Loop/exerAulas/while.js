
function dice () { 
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
let contador = 0;

while (d1 != d2) {
  d1 = dice();
  d2 = dice();
  contador += 1;

  console.log(`d1 = ${d1}
d2 = ${d2}\n`);
}

console.log(contador);
