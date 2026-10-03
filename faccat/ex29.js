/**
 * Faccat - Exercício 29: Soma dos 2 maiores entre 3 valores
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('Valor 1:');
  const b = await lerNumero('Valor 2:');
  const c = await lerNumero('Valor 3:');
  const soma = a + b + c - Math.min(a, b, c);
  escrever(`Soma dos 2 maiores: ${soma}`);
});
