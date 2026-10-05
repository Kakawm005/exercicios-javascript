// Faccat - Exercício 49: Exercício 48 com NOVO CÁLCULO (S/N)?

var n1, n2, resposta;

do {
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

  console.log("Média: " + (n1 + n2) / 2);
  resposta = prompt("NOVO CÁLCULO (S/N)?");
} while (resposta == "S" || resposta == "s");
