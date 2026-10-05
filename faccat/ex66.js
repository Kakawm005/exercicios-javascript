// Faccat - Exercício 66: Soma dos inteiros entre dois valores (qualquer ordem)

var a = Number(prompt("Primeiro valor:"));
var b = Number(prompt("Segundo valor:"));
var inicio, fim;
if (a <= b) {
  inicio = a;
  fim = b;
} else {
  inicio = b;
  fim = a;
}
var soma = 0;
for (var i = inicio; i <= fim; i++) {
  soma = soma + i;
}
console.log("Soma dos inteiros entre " + a + " e " + b + ": " + soma);
