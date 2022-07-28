const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((atual, prox) => {
    console.log(`atual:${atual}      e       prox: ${prox}`);
    return atual.concat(prox)
  }, []);
}

console.log(flatten());