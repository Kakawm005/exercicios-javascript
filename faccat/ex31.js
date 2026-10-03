/**
 * Faccat - Exercício 31: Três lados formam um triângulo?
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('Lado A:');
  const b = await lerNumero('Lado B:');
  const c = await lerNumero('Lado C:');
  const forma = a < b + c && b < a + c && c < a + b;
  escrever(forma ? 'Os valores FORMAM um triângulo.' : 'Os valores NÃO formam um triângulo.');
});
