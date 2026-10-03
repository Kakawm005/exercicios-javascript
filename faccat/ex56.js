/**
 * Faccat - Exercício 56: Tabuada de 1 a 10 do valor lido (entre 1 e 10)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let n;
  do {
    n = await lerNumero('Digite um valor inteiro entre 1 e 10:');
  } while (!Number.isInteger(n) || n < 1 || n > 10);
  for (let i = 1; i <= 10; i++) {
    escrever(`${n} x ${i} = ${n * i}`);
  }
});
