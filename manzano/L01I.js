/**
 * Manzano - L01I: Quadrado da diferença entre dois inteiros
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('A:');
  const b = await lerNumero('B:');
  escrever(`(A - B)² = ${(a - b) ** 2}`);
});
