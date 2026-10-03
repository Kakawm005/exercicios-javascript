/**
 * Faccat - Exercício 79: Média da turma (20 alunos) e quantos ficaram acima da média
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const N = 20;
  const notas = [];
  for (let i = 1; i <= N; i++) {
    notas.push(await lerNumero(`Nota do aluno ${i}:`));
  }
  const media = notas.reduce((s, n) => s + n, 0) / N;
  let acima = 0;
  for (const n of notas) {
    if (n > media) acima++;
  }
  escrever(`Média da turma: ${media.toFixed(2)}`);
  escrever(`Alunos acima da média: ${acima}`);
});
