// Faccat - Exercício 44: Divisão de dois valores com REPITA (segundo valor diferente de zero)

var a = Number(prompt("Primeiro valor:"));
var b;
do {
  b = Number(prompt("Segundo valor (não pode ser zero):"));
} while (b == 0);
console.log(a + " / " + b + " = " + a / b);
