// Manzano - L04D: Grãos de trigo no tabuleiro de xadrez (repita)

var casa = 1;
var graos = 1;
var total = 0;
do {
  total = total + graos;
  graos = graos * 2;
  casa = casa + 1;
} while (casa <= 64);
console.log("Total de grãos de trigo: " + total);
