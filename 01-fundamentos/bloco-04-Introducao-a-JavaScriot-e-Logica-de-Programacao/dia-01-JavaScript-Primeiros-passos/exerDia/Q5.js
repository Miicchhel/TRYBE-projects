const [a,b,c] = [80,60,40];

if(a < 0 || b < 0 || c < 0){
  console.log('error, ângulo negativo encontrado.');
}else if( a + b + c === 180){
  console.log('true');
}else{
  console.log('false');
}