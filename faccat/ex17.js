/**
 * Faccat - Exercício 17: Média de duas avaliações e situação (aprovação com média >= 6)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  // A apostila não informa a média mínima; foi adotado 6.
  const MEDIA_MINIMA = 6;
  const n1 = await lerNumero('Nota da 1ª avaliação:');
  const n2 = await lerNumero('Nota da 2ª avaliação:');
  const media = (n1 + n2) / 2;
  escrever(media >= MEDIA_MINIMA ? 'Aluno APROVADO' : 'Aluno REPROVADO');
  escrever(`Média: ${media.toFixed(2)}`);
});
