
import { perdaPosicao } from "./perdaPosicao";

export function calculaPotencia(consumoMensal, ligacao, irradiacao, temperatura, inclinacao, orientacao){
  let perdasPadrao = 0.073;
  let perdaTermica = (temperatura+5)*0.0039
  let perdaTotal = perdasPadrao + perdaTermica + perdaPosicao(inclinacao, orientacao)
  let rendimento = 1 - perdaTotal;
  
  // var ligacao = 0;

  switch(ligacao){
    case 'Monofásico':
      ligacao = 30;
      // console.log("entrou no case");
      break;
    case 'Bifásico':
      ligacao = 50;
      break;
    case 'Trifásico':
      ligacao = 100;
      break;
      default:
      break;
  }
  

  // let resultado = ((consumoMensal - ligacao)/30)/(irradiacao*rendimento)
  let resultado = ((consumoMensal - 30)/30)/(irradiacao*rendimento)
  // console.log(consumoMensal);
  // console.log(ligacaoIN);
  // console.log(ligacao);
  // console.log(irradiacao);
  // console.log(temperatura);
  // console.log(inclinacao);
  // console.log(orientacao);
  // console.log(((consumoMensal - ligacao)/30)/(irradiacao*rendimento));
  return resultado
}