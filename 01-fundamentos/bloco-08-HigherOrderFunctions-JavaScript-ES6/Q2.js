const aposta = () => Math.floor(Math.random()*5 + 1);

const sorteio = (n, callback)=>{
  const sorteado = callback()
  return (n === sorteado) ? "Parabéns você ganhou" : `Tente novamente ${sorteado}`
};

const teste = (callback)=> {
  let parada = false;
  while (!parada){
    let s = callback(2, aposta)
    console.log(s);
    if (s === "Parabéns você ganhou") parada = true;
  } 
}
teste(sorteio)