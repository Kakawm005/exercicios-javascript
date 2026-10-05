// Faccat - Exercício 79: Média da turma (20 alunos) e quantos ficaram acima da média

var notas = [];
var soma = 0;
for (var i = 0; i < 20; i++) {
  notas[i] = Number(prompt("Nota do aluno " + (i + 1) + ":"));
  soma = soma + notas[i];
}
var media = soma / 20;

var acima = 0;
for (var i = 0; i < 20; i++) {
  if (notas[i] > media) {
    acima = acima + 1;
  }
}
console.log("Média da turma: " + media);
console.log("Alunos acima da média: " + acima);
