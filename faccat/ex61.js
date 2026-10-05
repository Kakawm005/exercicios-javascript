// Faccat - Exercício 61: Média aritmética de 10 valores

var soma = 0;
for (var i = 1; i <= 10; i++) {
  var valor = Number(prompt("Digite o valor " + i + ":"));
  soma = soma + valor;
}
console.log("Média: " + soma / 10);
