let peca = 'rei';
peca = peca.toLowerCase();

switch (peca){
  case 'peao':
    console.log(`${peca}:
      movimentação: move-se verticalmente. 
        caso 1: quando o ${peca} encontra-se em sua CASA ORIGINAL ele pode mover-se por até duas casa a frente;
        caso 2: quando fora de sua casa original, move-se somente uma casa a frente.
      captura: diagonal;
      restrição: 
        mover-se para trás;
        mover-se para uma casa já ocupada por uma peça da mesma cor;
        pular outras peças;
      movimentos especiais:
        captura en passant: peão é capturado em seu movimento inicial de duas casas.
        promoção do peão: peão é promovido para outra peça, de livre escolha, quando ele atinge o final do tabuleiro.`);
    break;
  case 'cavalo':
    console.log(`${peca}:
      movimentação: move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.
      captura: captura quando termina seu movimento na casa de uma peça adversária.
      restrição: não pode terminar seu movimento em uma casa ocupada por uma peça da mesma cor
      movimentos especiais: pode pular sobre peças de qualquer cor enquanto vai para sua casa de destino, mas ele não captura nenhuma das peças que pula`);
      ;
    break;
  case 'bispo':
    console.log(`${peca}:
    movimentação: move-se em uma linha reta diagonalmente por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça;captura: captura no mesmo caminho em que ele se move, parando na casa da peça adversária.
    restrição: 
        mover-se para uma casa já ocupada por uma peça da mesma cor;
        pular outras peças;
      movimentos especiais: nenhum`);
    break;
  case 'torre':
    console.log(`${peca}:
    movimentação: move-se em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.
    captura: captura no mesmo caminho em que se move, ocupando a casa onde se encontra a peça adversária.
    restrição:
      mover-se para uma casa já ocupada por uma peça da mesma cor;
      pular outras peças;
    movimentos especiais:
      roque: uma torre e o rei são agrupados em uma posição defensiva`);
    break;
  case 'rainha':
    console.log(`${peca}:
    movimentação: move-se por qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.
    captura: captura no mesmo caminho em que se move, ocupando a casa onde se encontra a peça adversária.
    restrição:
      mover-se para uma casa já ocupada por uma peça da mesma cor;
      pular outras peças;
    movimentos especiais: nenhum`);
    break;
  case 'rei':
    console.log(`${peca}:
    movimentação: move-se para qualquer casa adjacente.
    captura: captura no mesmo caminho em que se move, ocupando a casa onde se encontra a peça adversária.
    restrição:
      mover-se para uma casa que o coloque sob ataque de uma peça adversária (chamado em “cheque”)
      mover-se para uma casa já ocupada por uma peça da mesma cor;
      pular outras peças;
    movimentos especiais:
      roque: uma torre e o rei são agrupados em uma posição defensiva`);
    break;
  default:
    console.log('error: noça não reconhecida.');
}