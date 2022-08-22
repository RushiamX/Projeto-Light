
function calculaPotencia(consumoMensal, ligacao, irradiacao, temperatura){
  let perdas = 0.24;
  let rendimento = 1 - perdas;

  resultado = ((consumoMensal - ligacao)/30)/(irradiacao*rendimento)

}