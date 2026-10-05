// Faccat - Exercício 64: Soma dos números lidos com valor inferior a 40

var soma = 0;
for (var i = 1; i <= 10; i++) {
  var n = Number(prompt("Digite o número " + i + ":"));
  if (n < 40) {
    soma = soma + n;
  }
}
console.log("Soma dos números menores que 40: " + soma);
