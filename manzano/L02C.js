/**
 * Manzano - L02C: Média de quatro notas (aprovado se média >= 5)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let soma = 0;
  for (let i = 1; i <= 4; i++) soma += await lerNumero(`Nota ${i}:`);
  const media = soma / 4;
  escrever(media >= 5 ? 'Aluno APROVADO' : 'Aluno REPROVADO');
  escrever(`Média: ${media.toFixed(2)}`);
});
