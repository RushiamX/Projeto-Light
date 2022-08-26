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

let perda = [[0.2,	0.28,	0.5,	0.84,	1.25,	1.68,	2.05,	2.31,	2.41,	2.31,	2.05,	1.68,	1.25,	0.84,	0.5],
[0,	0.14,	0.55,	1.18,	1.98,	2.84,	3.63,	4.19,	4.39,	4.19,	3.63,	2.84,	1.98,	1.18,	0.55],
[0.4,	0.6,	1.14,	2.02,	1.98,	4.47,	5.7,	6.6,	6.94,	6.6,	5.7,	4.47,	3.17,	2.02,	1.14],
[1.42, 1,64, 2.28,	3.33,	4.8,	6.54,	8.25,	9.54,	10.04,	9.54,	8.25,	6.54,	4.8,	3.33,	2.228],
[3.02,	3.25,	3.93,	5.11,	6.84,	9.01,	11.24,	12.97,	13.65,	12.97,	11.24,	9.01,	6.84,	5.11,	3.93],
[5.21,	5.43,	6.09,	7.32,	9.27,	11.85,	14.62,	16.85,	17.75,	16.85,	14.62,	11.85,	9.27,	7.32,	6.09]
]