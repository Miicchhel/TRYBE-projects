//1-
let aqui = document.getElementById('elementoOndeVoceEsta');
console.log(aqui);

//2-
let paiDeAqui = aqui.parentNode;
paiDeAqui.style.color = 'white';
paiDeAqui.style.fontWeight = 600;
paiDeAqui.style.backgroundColor = 'rgb(76,164,109)';
console.log(paiDeAqui);

//3-
let filhoDeAqui = aqui.firstElementChild;
filhoDeAqui.innerText = 'primeiroFilhoDoFilho';
filhoDeAqui.style.color = 'purple';
console.log(filhoDeAqui);

//4-
let primeiroFilhoDoPai = paiDeAqui.firstElementChild;
console.log(primeiroFilhoDoPai);

//5-
let irmaoAnteriorDeAqui=aqui.previousElementSibling;
console.log(irmaoAnteriorDeAqui)

//6-
let atencao = aqui.nextSibling;
console.log(atencao);

//7-
let terceiroFilho = aqui.nextElementSibling;
console.log(terceiroFilho);

//7-
let novamenteTerceiroFilho = paiDeAqui.lastElementChild.previousElementSibling
console.log(novamenteTerceiroFilho)