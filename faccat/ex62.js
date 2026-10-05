// Faccat - Exercício 62: Média das notas de uma turma

var alunos = Number(prompt("Número de alunos da turma:"));
var soma = 0;
if (alunos > 0) {
  for (var i = 1; i <= alunos; i++) {
    var nota = Number(prompt("Nota do aluno " + i + ":"));
    soma = soma + nota;
  }
  console.log("Média da turma: " + soma / alunos);
} else {
  console.log("O número de alunos precisa ser maior que zero");
}
