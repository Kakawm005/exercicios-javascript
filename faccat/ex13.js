/**
 * Faccat - Exercício 13: Média ponderada (pesos 2, 3 e 5)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const n1 = await lerNumero('Nota 1:');
  const n2 = await lerNumero('Nota 2:');
  const n3 = await lerNumero('Nota 3:');
  const media = (n1 * 2 + n2 * 3 + n3 * 5) / (2 + 3 + 5);
  escrever(`Média final: ${media.toFixed(2)}`);
});
