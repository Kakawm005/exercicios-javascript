/**
 * Manzano - L05K: Fatorial dos ímpares de 1 a 10 (para)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  for (let n = 1; n <= 10; n += 2) {
    let fat = 1;
    for (let k = 2; k <= n; k++) fat *= k;
    escrever(`${n}! = ${fat}`);
  }
});
