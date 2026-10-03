/**
 * Manzano - L04C: Números divisíveis por 4 menores que 200 (repita)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let i = 1;
  do {
    if (i % 4 === 0) escrever(i);
    i++;
  } while (i < 200);
});
