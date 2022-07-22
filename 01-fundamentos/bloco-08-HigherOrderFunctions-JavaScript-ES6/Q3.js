const analisaProva = (valorGabarito, valorAluno) => {
  if (valorAluno === 'N.A') return 0;
  if (valorGabarito !== valorAluno) return -0.5;
  return 1;
}

const resultaProva = (respostasGabarito, respostaAluno, callback) => {
  let resultado = 0;
  let index = 0;
  while(index < respostasGabarito.length) {
    let gabarito = respostasGabarito[index];
    let resposta = respostaAluno[index];
    resultado += callback(gabarito,resposta)
    // console.log(`Gabarito:${respostasGabarito[index]}    Resposta:${respostaAluno[index]}     Resultado:${resultado}`);
    index += 1;
  }
  return (resultado < 0) ? 0:resultado
}

let RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
let STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(resultaProva(RIGHT_ANSWERS, STUDENT_ANSWERS, analisaProva));

RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
STUDENT_ANSWERS = ['C', 'B', 'D', 'A', 'A', 'N.A', 'A', 'D', 'C','C'];
console.log(resultaProva(RIGHT_ANSWERS, STUDENT_ANSWERS, analisaProva));