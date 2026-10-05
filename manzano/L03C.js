// Manzano - L03C: Somatório dos pares de 1 a 500 (enquanto)

var i = 1;
var soma = 0;
while (i <= 500) {
  if (i % 2 == 0) {
    soma = soma + i;
  }
  i = i + 1;
}
console.log("Somatório dos pares de 1 a 500: " + soma);
