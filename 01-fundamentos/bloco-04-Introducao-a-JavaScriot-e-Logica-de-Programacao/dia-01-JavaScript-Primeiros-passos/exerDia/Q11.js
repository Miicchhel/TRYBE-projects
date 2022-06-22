let salarioBruto = 3000.00;

//INSS (Instituto Nacional do Seguro Social)
const inssPatamarI = salarioBruto * (8/100); //alíquota de 8%
const inssPatamarII = salarioBruto * (9/100); //alíquota de 9%
const inssPatamarIII = salarioBruto * (11/100); //alíquota de 11%
const inssPatamarIV = 570.88; //áliquota máx de R$570,88

//Calculando o valor do salário após a contribuição para o INSS
if(salarioBruto > 5189.82){
  salarioDepoisINSS = salarioBruto - inssPatamarIV;
  contribuiçãoINSS = inssPatamarIV;
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  salarioDepoisINSS = salarioBruto - inssPatamarIII;
  contribuiçãoINSS = inssPatamarIII;
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  salarioDepoisINSS = salarioBruto - inssPatamarII;
  contribuiçãoINSS = inssPatamarII; 
}else{
  salarioDepoisINSS = salarioBruto - inssPatamarI; //Salário bruto até R$ 1.556,94
  contribuiçãoINSS = inssPatamarI;
}

//IR (Imposto de Renda)
const irPatamarI = 0; //isento de imposto
const irPatamarII = (salarioDepoisINSS * (7.5/100)) - 142.8; //alíquota de 7,5% e parcela de R$ 142,80
const irPatamarIII = (salarioDepoisINSS * (15/100)) - 354.8; //alíquota de 15% e parcela de R$ 354,80
const irPatamarIV = (salarioDepoisINSS * (22.5/100))- 636.13; //alíquota de 22,5% e parcela de R$ 636,13
const irPatamarV = (salarioDepoisINSS * (27.5/100))- 869.36; //alíquota de 27,5% e parcela de R$ 869,36

//Calculando o salário líquido após a retirada do IR
if(salarioDepoisINSS > 4664.68){
  salarioLiquido = salarioDepoisINSS - irPatamarV;
  IR = irPatamarV;
}else if(salarioDepoisINSS >= 3751.06 && salarioDepoisINSS <= 4664.68){
  salarioLiquido = salarioDepoisINSS - irPatamarIV;
  IR = irPatamarIV;
}else if(salarioDepoisINSS >= 2826.66 && salarioDepoisINSS <= 3751.05){
  salarioLiquido = salarioDepoisINSS - irPatamarIII;
  IR = irPatamarIII; 
}else if(salarioDepoisINSS >= 1903.99 && salarioDepoisINSS <= 2826.65){
  salarioLiquido = salarioDepoisINSS - irPatamarII;
  IR = irPatamarII;
}else{
  salarioLiquido = salarioDepoisINSS - irPatamarI;
  IR = irPatamarI;
}

//imprimindo valores
console.log(`Salário Bruto: ${salarioBruto};
Contribuição (INSS): ${contribuiçãoINSS};
IR: ${IR.toFixed(2)};
Salário Líquido: ${salarioLiquido}.`)
