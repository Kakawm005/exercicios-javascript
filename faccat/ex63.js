// Faccat - Exercício 63: Soma de 10 números

var soma = 0;
for (var i = 1; i <= 10; i++) {
  var n = Number(prompt("Digite o número " + i + ":"));
  soma = soma + n;
}
console.log("Soma total: " + soma);
