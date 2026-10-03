/**
 * Manzano - L05A: Quadrados dos inteiros de 15 a 200 (para)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  for (let i = 15; i <= 200; i++) {
    escrever(`${i}² = ${i * i}`);
  }
});
