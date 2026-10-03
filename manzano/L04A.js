/**
 * Manzano - L04A: Quadrados dos inteiros de 15 a 200 (repita)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let i = 15;
  do {
    escrever(`${i}² = ${i * i}`);
    i++;
  } while (i <= 200);
});
