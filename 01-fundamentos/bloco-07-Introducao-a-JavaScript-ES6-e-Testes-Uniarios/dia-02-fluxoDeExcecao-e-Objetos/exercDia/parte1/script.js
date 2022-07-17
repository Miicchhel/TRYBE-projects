const testaValores = (a, b) => {
  if (a.includes(',') || b.includes(',')) throw new Error('Use o padrão: 2,5 => 2.5');
  if (a === '' || b === '') throw new Error('Você deve irformar os DOIS valores!');
  if (isNaN(a) === true || isNaN(b) === true) throw new Error('Você informou um valor não númerico');
}  

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const resultado = document.getElementById('result'); 
  try {
    testaValores(value1,value2);
    const result = Number(value1) + Number(value2);
    resultado.innerHTML = `<h1>Resultado: ${result}</h1>`;
    resultado.style.color = 'black';
  } catch (erro) {
    resultado.innerHTML = `<h2>Erro: ${erro.message}</h2>`;
    resultado.style.color = 'red';
    // console.error(erro)
  }
  finally{
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
