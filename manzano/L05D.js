// Manzano - L05D: Somatório dos pares de 1 a 500 (para)

var soma = 0;
for (var i = 1; i <= 500; i++) {
  if (i % 2 == 0) {
    soma = soma + i;
  }
}
console.log("Somatório dos pares de 1 a 500: " + soma);
