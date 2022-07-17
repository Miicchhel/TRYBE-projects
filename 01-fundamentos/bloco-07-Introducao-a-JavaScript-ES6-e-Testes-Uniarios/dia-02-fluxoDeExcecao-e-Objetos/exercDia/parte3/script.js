const addTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

const showChaves = (objeto) => {
  const chaves = Object.keys(objeto);
  console.log(chaves);
    // for (let elem in objeto) {
    //   console.log(elem);
    // }
}

const showValores = (objeto) => {
  const valores = Object.values(objeto);
  console.log(valores);
}

const showTamanhoObjeto = (objeto) => {
  const tamanho = Object.entries(objeto).length;
  console.log(tamanho);
}

const totalStudents = (objeto) => {
  let total = 0;
  const chaves = Object.keys(objeto);
  for (let elem in chaves) {
    total += objeto[chaves[elem]].numeroEstudantes
  }
  console.log(total);
}

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// showChaves(lesson2);
// showValores(lesson2)
// showTamanhoObjeto(lesson2);
// console.log('------------------');
addTurno(lesson2,'turno','noite');
// showChaves(lesson2);
// showValores(lesson2);
// showTamanhoObjeto(lesson2);
// console.log('------------------');
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// showChaves(allLessons);
// showValores(allLessons);
// showTamanhoObjeto(allLessons);
totalStudents(allLessons);