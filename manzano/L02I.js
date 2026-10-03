/**
 * Manzano - L02I: Par ou ímpar
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const n = await lerNumero('Digite um número inteiro:');
  escrever(n % 2 === 0 ? 'O número é PAR' : 'O número é ÍMPAR');
});
