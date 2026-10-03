/**
 * Faccat - Exercício 55: Tabuada do 8, de 1 a 10
 */
const { escrever, executar } = require('../util');

executar(async () => {
  for (let i = 1; i <= 10; i++) {
    escrever(`8 x ${i} = ${8 * i}`);
  }
});
