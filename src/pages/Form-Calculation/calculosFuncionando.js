let consumoMensal = 500;
let ligacao = 'monofásica';
let irradiacao = 5.3;
let temperatura = 32;
let inclinacao = 10;
let orientacao = 'leste'

function perdaPosicao(inclinacao, orientacao){

  switch (inclinacao) {
    case 5:
      inclinacao=0;
      break;
    case 10:
      inclinacao=1;
      break;
    case 15:
      inclinacao=2;
      break;
    case 20:
      inclinacao=3;
      break;
    case 25:
      inclinacao=4;
      break;
    case 30:
      inclinacao=5;
      break;

    default:
      break;
  }

  switch (orientacao) {
    case 'norte':
      orientacao=0;
      break;
    case 'nordeste':
      orientacao=1;
      break;
    case 'leste':
      orientacao=2;
      break;
    case 'sudeste':
      orientacao=3;
      break;
    case sul:
      orientacao=4;
      break;
    case 'sudoeste':
      orientacao=5;
      break;
    case 'oeste':
      orientacao=6;
      break;
    case 'noroeste':
      orientacao=7;
      break;
  
    default:
      break;
  }

let perda = [
[0.2, 0.5,	1.25,	2.05,	2.41,	2.05,	1.25,	0.5],
[0,	0.55,	1.98,	3.63,	4.39,	3.63,	1.98,	0.55],
[0.4,	1.14,	1.98,	5.7, 6.94, 5.7,	3.17,	1.14],
[1.42, 2.28,	4.8,	8.25,	10.04,	8.25,	4.8,	2.228],
[3.02,	3.93,	6.84,	11.24,	13.65,	11.24,	6.84,	3.93],
[5.21,	6.09,	9.27,	14.62,	17.75,	14.62,	9.27,	6.09],
]

return (perda[inclinacao] [orientacao])/100
}

function calculaPotencia(consumoMensal, ligacao, irradiacao, temperatura, inclinacao, orientacao){
  let perdasPadrao = 0.073;
  let perdaTermica = (temperatura+5)*0.0039;
  let perdaTotal = perdasPadrao + perdaTermica + perdaPosicao(inclinacao, orientacao);
  let rendimento = 1 - perdaTotal;
  
  console.log(ligacao);

  switch(ligacao){
    case 'monofásica':
      ligacao = 30;
      break;
    case 'bifásica':
      ligacao = 50;
      break;
    case 'trifásica':
      ligacao = 100;
      break;
      default:
      break;
  }
  resultado = ((consumoMensal - ligacao)/30)/(irradiacao*rendimento)
  console.log(resultado)
  return resultado
}

console.log( calculaPotencia(consumoMensal, ligacao, irradiacao, temperatura, inclinacao, orientacao) )
/* console.log( perdaPosicao(inclinacao,orientacao)); */
