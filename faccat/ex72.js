// Faccat - Exercício 72: Maior preço e média de preços de 15 produtos

var soma = 0;
var maior = 0;
for (var i = 1; i <= 15; i++) {
  var codigo = prompt("Código do produto " + i + ":");
  var preco = Number(prompt("Preço do produto " + codigo + ":"));
  soma = soma + preco;
  if (i == 1 || preco > maior) {
    maior = preco;
  }
}
console.log("Maior preço: R$ " + maior);
console.log("Média dos preços: R$ " + soma / 15);
