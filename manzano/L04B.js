/**
 * Manzano - L04B: Somatório dos pares de 1 a 500 (repita)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let i = 1;
  let soma = 0;
  do {
    if (i % 2 === 0) soma += i;
    i++;
  } while (i <= 500);
  escrever(`Somatório dos pares de 1 a 500: ${soma}`);
});
