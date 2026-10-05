// Faccat - Exercício 65: Soma dos inteiros entre dois valores (primeiro menor que o segundo)

var a = Number(prompt("Primeiro valor:"));
var b = Number(prompt("Segundo valor (maior que o primeiro):"));
var soma = 0;
if (a <= b) {
  for (var i = a; i <= b; i++) {
    soma = soma + i;
  }
  console.log("Soma dos inteiros de " + a + " até " + b + ": " + soma);
} else {
  console.log("O segundo valor precisa ser maior que o primeiro");
}
