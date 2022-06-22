const valorCusto = 10;
const valorVenda = 15;

if( valorCusto < 0 || valorVenda < 0){
  console.log('error: os valores não podem ser NEGATIVOS.')
}else{
  const quantidadeVendida = 1000;
  const valorCustoTotal = 1.2 * valorCusto; //com imposto de 20%
  const lucro = (valorVenda - valorCustoTotal) * quantidadeVendida;
  
  const lucroFormatado = lucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  // console.log(lucro)
  // console.log(lucro.toFixed(2));
  console.log(lucroFormatado);
}


