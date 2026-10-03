/**
 * Manzano - L01A: Celsius para Fahrenheit
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const c = await lerNumero('Temperatura em graus Celsius:');
  const f = (9 * c + 160) / 5;
  escrever(`${c} °C = ${f} °F`);
});
