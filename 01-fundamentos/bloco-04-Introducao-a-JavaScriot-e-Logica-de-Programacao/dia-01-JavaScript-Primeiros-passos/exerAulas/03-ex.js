const nota = 40;
let resultado;

if(nota >= 80){
  resultado = 'aprovada';
  // console.log("Parabéns, você foi aprovada(o)!");
}else if(nota >= 60 && nota < 80){
  resultado = 'lista';
  // console.log("Você está na nossa lista de espera.");
}else{
  resultado = 'reprovada';
  // console.log("Você foi reprovada(o).");
}

export {resultado};