
function calculaPotencia(consumoMensal, ligacao, irradiacao, temperatura){
  let perdasPadrao = 0.073;
  
  let perdaTermica = (temperatura+5)*0.0039
  let perdaTotal = perdasPadrao + perdaTermica + perdaPosicao
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
  }
  

  resultado = ((consumoMensal - ligacao)/30)/(irradiacao*rendimento)

  return resultado
}