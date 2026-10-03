/**
 * Faccat - Exercício 36: Soma e produto de idades de homens e mulheres
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const h1 = await lerNumero('Idade do homem 1:');
  const h2 = await lerNumero('Idade do homem 2:');
  const m1 = await lerNumero('Idade da mulher 1:');
  const m2 = await lerNumero('Idade da mulher 2:');
  escrever(`Homem mais velho + mulher mais nova: ${Math.max(h1, h2) + Math.min(m1, m2)}`);
  escrever(`Homem mais novo * mulher mais velha: ${Math.min(h1, h2) * Math.max(m1, m2)}`);
});
