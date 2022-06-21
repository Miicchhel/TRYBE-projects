const myName = 'Michel';
const birthCity = 'São Paulo';
let birthYear = 1990;
console.log({myName});
console.log({birthCity});
console.log({birthYear});

birthYear = 2030;
console.log({birthYear});

birthCity = "Recife"; // não posso reatribuir valores a constantes
console.log(birthCity); // por isso dá este erro