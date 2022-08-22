
function calculaPotencia(consumoMensal, ligacao, irradiacao, temperatura){
  let perdas = 0.24;
  let rendimento = 1 - perdas;

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