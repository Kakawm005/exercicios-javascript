// Faccat - Exercício 71: Maior número e média de uma quantidade de números

var qtd = Number(prompt("Quantidade de números:"));
var soma = 0;
var maior = 0;
if (qtd > 0) {
  for (var i = 1; i <= qtd; i++) {
    var n = Number(prompt("Digite o número " + i + ":"));
    soma = soma + n;
    if (i == 1 || n > maior) {
      maior = n;
    }
  }
  console.log("Maior número: " + maior);
  console.log("Média: " + soma / qtd);
} else {
  console.log("A quantidade precisa ser maior que zero");
}
