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
    case norte:
      orientacao=0;
      break;
    case nordeste:
      orientacao=1;
      break;
    case leste:
      orientacao=2;
      break;
    case sudeste:
      orientacao=3;
      break;
    case sul:
      orientacao=4;
      break;
    case sudoeste:
      orientacao=5;
      break;
    case oeste:
      orientacao=6;
      break;
    case noroeste:
      orientacao=7;
      break;
  
    default:
      break;
  }
}