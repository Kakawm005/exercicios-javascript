// Faccat - Exercício 17: Média de duas avaliações e situação (aprovado com média >= 6)

// o exercício não diz a média mínima, então usei 6
var n1 = Number(prompt("Nota da 1ª avaliação:"));
var n2 = Number(prompt("Nota da 2ª avaliação:"));
var media = (n1 + n2) / 2;
if (media >= 6) {
  console.log("Aluno APROVADO");
} else {
  console.log("Aluno REPROVADO");
}
console.log("Média: " + media);
