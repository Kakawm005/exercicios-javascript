/**
 * Manzano - L01B: Fahrenheit para Celsius
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const f = await lerNumero('Temperatura em graus Fahrenheit:');
  const c = (f - 32) * (5 / 9);
  escrever(`${f} °F = ${c.toFixed(2)} °C`);
});
