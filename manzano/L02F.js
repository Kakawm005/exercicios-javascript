/**
 * Manzano - L02F: Três valores em ordem crescente
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('A:');
  const b = await lerNumero('B:');
  const c = await lerNumero('C:');
  const ordenados = [a, b, c].sort((x, y) => x - y);
  escrever(`Ordem crescente: ${ordenados.join(', ')}`);
});
