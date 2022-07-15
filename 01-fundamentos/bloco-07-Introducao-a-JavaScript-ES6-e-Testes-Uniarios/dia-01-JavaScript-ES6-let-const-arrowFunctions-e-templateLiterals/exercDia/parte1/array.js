function insertionSort(array) {
  let arrayTamanho = array.length;
  for (let i = 1; i < arrayTamanho; i += 1) {
    let posicaoAtual = array[i];
    let j = i - 1;
    while ((j > -1) && (posicaoAtual < array[j])) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = posicaoAtual;
  }
  return array;
}

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const copyOddsAndEvens = oddsAndEvens;

console.log(`oddsAndEvens:${oddsAndEvens}`);
console.log(`insertionSort(oddsAndEvens): ${insertionSort(oddsAndEvens)}`);

console.log(`copyOddsAndEvens: ${copyOddsAndEvens}`);
console.log(`copyOddsAndEvens.sort():${copyOddsAndEvens.sort()}`);