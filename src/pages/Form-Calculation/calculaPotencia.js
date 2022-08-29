
import { perdaPosicao } from "./perdaPosicao";

export function calculaPotencia(consumoMensal, ligacao, irradiacao, temperatura, inclinacao, orientacao){
  let perdasPadrao = 0.073;
  let perdaTermica = (temperatura+5)*0.0039
  let perdaTotal = perdasPadrao + perdaTermica + perdaPosicao(inclinacao, orientacao)
  let rendimento = 1 - perdaTotal;

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

  return resultado
}