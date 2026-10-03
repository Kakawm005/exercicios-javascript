/**
 * Manzano - L01M: Quadrado da soma de três valores
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('A:');
  const b = await lerNumero('B:');
  const c = await lerNumero('C:');
  escrever(`(A + B + C)² = ${(a + b + c) ** 2}`);
});
