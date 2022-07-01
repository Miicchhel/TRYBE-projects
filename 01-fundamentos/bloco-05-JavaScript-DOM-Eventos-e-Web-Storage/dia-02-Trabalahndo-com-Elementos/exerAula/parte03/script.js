let paiDoPai = document.getElementById('paiDoPai');
let pai = paiDoPai.firstElementChild;

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta'){
    currentChildren.remove();
  }
}

pai.firstElementChild.lastElementChild.remove()
console.log(pai);