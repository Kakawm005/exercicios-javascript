/**
 * Manzano - L02B: Módulo de um número
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let n = await lerNumero('Digite um valor:');
  if (n < 0) n = n * -1;
  escrever(`Módulo: ${n}`);
});
