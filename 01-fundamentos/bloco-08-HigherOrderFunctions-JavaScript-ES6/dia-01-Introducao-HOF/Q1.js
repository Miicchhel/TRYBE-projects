const funcionario = (nomeCompleto) => {
  const arrayNome = nomeCompleto.split(" ");
  let nomeEmail = '';
  for (let index = 0; index < arrayNome.length; index += 1) {
    let parteNome = arrayNome[index].toLowerCase()
    if (index === arrayNome.length - 1) {
      nomeEmail += `${parteNome}`;
    } else {
      nomeEmail += `${parteNome}_`;
    } 
  }
  const email = `${nomeEmail}@trybe.com`;
  return {nomeCompleto: nomeCompleto, email: email,};
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(funcionario));

