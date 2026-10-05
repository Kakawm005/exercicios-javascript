// Faccat - Exercício 47: Exercício 45 com mensagem VALOR INVÁLIDO

var a = Number(prompt("Primeiro valor:"));
var b = Number(prompt("Segundo valor:"));
while (b == 0) {
  console.log("VALOR INVÁLIDO");
  b = Number(prompt("Segundo valor:"));
}
console.log(a + " / " + b + " = " + a / b);
