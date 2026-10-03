/**
 * Manzano - L04E: Somatório do fatorial de 15 valores (repita)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let i = 1;
  let somaFatoriais = 0;
  do {
    const n = await lerNumero(`Valor ${i} (inteiro >= 0):`);
    let fat = 1;
    let k = 2;
    while (k <= n) {
      fat *= k;
      k++;
    }
    escrever(`${n}! = ${fat}`);
    somaFatoriais += fat;
    i++;
  } while (i <= 15);
  escrever(`Somatório dos fatoriais: ${somaFatoriais}`);
});
