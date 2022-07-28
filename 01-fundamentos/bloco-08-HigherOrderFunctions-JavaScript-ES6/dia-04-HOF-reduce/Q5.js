const books = require('./books');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((somaAs, arrayProxItem) => {
    // console.log(`somaAs: ${somaAs} | arrayProxItem: ${arrayProxItem}`);
    return somaAs + arrayProxItem.split('').reduce((acumulador, current) => {
      // console.log(`acumulador: ${acumulador} | current: ${current}`);
      return (current === 'a' || current === 'A') ? acumulador += 1 : acumulador
    },0)
  },0);
}

console.log(containsA());