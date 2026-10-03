/**
 * Manzano - L02K: Apresentar o valor se não for maior que três
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const n = await lerNumero('Digite um valor inteiro:');
  if (!(n > 3)) escrever(n);
});
