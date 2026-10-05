// Faccat - Exercício 48: Média de duas notas aceitando apenas valores entre 0 e 10

var n1, n2;

do {
  n1 = Number(prompt("Nota da 1ª avaliação (0 a 10):"));
  if (n1 < 0 || n1 > 10) {
    console.log("Nota inválida, use valores de 0 a 10");
  }
} while (n1 < 0 || n1 > 10);

do {
  n2 = Number(prompt("Nota da 2ª avaliação (0 a 10):"));
  if (n2 < 0 || n2 > 10) {
    console.log("Nota inválida, use valores de 0 a 10");
  }
} while (n2 < 0 || n2 > 10);

var media = (n1 + n2) / 2;
console.log("Média: " + media);
