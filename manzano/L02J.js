/**
 * Manzano - L02J: Valor na faixa de 1 a 9
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const n = await lerNumero('Digite um valor de 1 a 9:');
  escrever(n >= 1 && n <= 9 ? 'O valor está na faixa permitida' : 'O valor está fora da faixa permitida');
});
