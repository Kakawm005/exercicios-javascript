// Faccat - Exercício 46: Exercício 44 com mensagem VALOR INVÁLIDO

var a = Number(prompt("Primeiro valor:"));
var b;
do {
  b = Number(prompt("Segundo valor:"));
  if (b == 0) {
    console.log("VALOR INVÁLIDO");
  }
} while (b == 0);
console.log(a + " / " + b + " = " + a / b);
