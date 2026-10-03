/**
 * Manzano - L01L: Soma dos quadrados de três valores
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('A:');
  const b = await lerNumero('B:');
  const c = await lerNumero('C:');
  escrever(`A² + B² + C² = ${a ** 2 + b ** 2 + c ** 2}`);
});
