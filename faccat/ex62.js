/**
 * Faccat - Exercício 62: Média das notas de uma turma
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const alunos = await lerNumero('Número de alunos:');
  if (alunos <= 0) {
    escrever('O número de alunos deve ser maior que zero.');
    return;
  }
  let soma = 0;
  for (let i = 1; i <= alunos; i++) {
    soma += await lerNumero(`Nota do aluno ${i}:`);
  }
  escrever(`Média da turma: ${(soma / alunos).toFixed(2)}`);
});
