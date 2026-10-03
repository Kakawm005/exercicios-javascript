/**
 * Manzano - L04G: Fatorial dos ímpares de 1 a 10 (repita)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let n = 1;
  do {
    let fat = 1;
    let k = 2;
    while (k <= n) {
      fat *= k;
      k++;
    }
    escrever(`${n}! = ${fat}`);
    n += 2;
  } while (n <= 10);
});
