// Manzano - L04B: Somatório dos pares de 1 a 500 (repita)

var i = 1;
var soma = 0;
do {
  if (i % 2 == 0) {
    soma = soma + i;
  }
  i = i + 1;
} while (i <= 500);
console.log("Somatório dos pares de 1 a 500: " + soma);
