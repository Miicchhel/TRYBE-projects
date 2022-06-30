/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

//1. Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudaTexto(tag){
  let p = document.getElementsByTagName(tag)[1];
  p.innerText = 'Em 2 anos estarei trabalhando como programador em uma empresa legal.'
}
mudaTexto('p');

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mudaCorFundo(classe, cor){
  let mainContent = document.getElementsByClassName(classe)[0];
  mainContent.style.backgroundColor = cor;
}
mudaCorFundo('main-content', "rgb(76,164,109)");

//3. Crie uma função que mude a cor do quadrado vermelho para branco.
mudaCorFundo('center-content', "white");

//4. Crie uma função que corrija o texto da tag <h1>.
function corrigirTexto(tag, texto){
  let h1 = document.getElementsByTagName('h1')[0];
  h1.innerText = texto;
}
corrigirTexto('h1', 'Exercício 5.1 - JavaScript');

//5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function textoEmMaiusculo(tag){
  let array = document.getElementsByTagName(tag);
  for (let index = 0; index < array.length; index +=  1) {
    array[index].innerText = array[index].innerText.toLocaleUpperCase();
  }
}
textoEmMaiusculo('p');

//6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function imprimeConsole(tag){
  let array = document.getElementsByTagName(tag);
  for (let index = 0; index < array.length; index +=  1) {
    console.log(array[index].innerText)
  }
}
imprimeConsole('p');




