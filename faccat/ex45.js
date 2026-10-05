// Faccat - Exercício 45: Divisão de dois valores com ENQUANTO

var a = Number(prompt("Primeiro valor:"));
var b = Number(prompt("Segundo valor (não pode ser zero):"));
while (b == 0) {
  b = Number(prompt("Segundo valor (não pode ser zero):"));
}
console.log(a + " / " + b + " = " + a / b);
