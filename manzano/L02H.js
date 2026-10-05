// Manzano - L02H: Maior e menor de cinco valores

var maior = 0;
var menor = 0;
for (var i = 1; i <= 5; i++) {
  var n = Number(prompt("Digite o número " + i + ":"));
  if (i == 1) {
    maior = n;
    menor = n;
  }
  if (n > maior) {
    maior = n;
  }
  if (n < menor) {
    menor = n;
  }
}
console.log("Maior: " + maior);
console.log("Menor: " + menor);
