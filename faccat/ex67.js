// Faccat - Exercício 67: Média dos inteiros entre 15 e 100

var soma = 0;
var qtd = 0;
for (var i = 15; i <= 100; i++) {
  soma = soma + i;
  qtd = qtd + 1;
}
console.log("Média: " + soma / qtd);
