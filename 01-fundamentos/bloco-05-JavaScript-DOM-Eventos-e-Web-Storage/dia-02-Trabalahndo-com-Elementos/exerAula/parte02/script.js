//1-
let pai = document.getElementById('pai');
let novoFilho = document.createElement('section');
novoFilho.classList.add('novoFilho')
pai.appendChild(novoFilho);

//2-
let Here = document.getElementById('elementoOndeVoceEsta');
let sonHere = document.createElement('section');
sonHere.classList = 'newFilhoDoFilho';
Here.appendChild(sonHere);

//3-
let newSonFirstSon = document.createElement('section');
newSonFirstSon.classList = 'NovoFilhoDoPrimeiroFilho';
Here.firstElementChild.appendChild(newSonFirstSon);

//4-
let terceiroFilho = newSonFirstSon.parentElement.parentElement.nextElementSibling
console.log(terceiroFilho)