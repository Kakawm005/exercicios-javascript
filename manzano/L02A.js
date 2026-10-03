/**
 * Manzano - L02A: Diferença do maior pelo menor valor
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('Primeiro valor:');
  const b = await lerNumero('Segundo valor:');
  escrever(`Diferença (maior - menor): ${Math.abs(a - b)}`);
});
