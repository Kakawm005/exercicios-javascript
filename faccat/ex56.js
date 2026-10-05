// Faccat - Exercício 56: Tabuada de 1 a 10 do valor lido (entre 1 e 10)

var n;
do {
  n = Number(prompt("Digite um valor entre 1 e 10:"));
} while (n < 1 || n > 10);

for (var i = 1; i <= 10; i++) {
  console.log(n + " x " + i + " = " + n * i);
}
