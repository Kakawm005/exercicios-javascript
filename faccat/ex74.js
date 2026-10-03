/**
 * Faccat - Exercício 74: Tabuada de 1 a 10 para os números de 1 a 10
 */
const { escrever, executar } = require('../util');

executar(async () => {
  for (let n = 1; n <= 10; n++) {
    escrever(`--- Tabuada do ${n} ---`);
    for (let i = 1; i <= 10; i++) {
      escrever(`${n} x ${i} = ${n * i}`);
    }
  }
});
