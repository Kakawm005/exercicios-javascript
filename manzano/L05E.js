/**
 * Manzano - L05E: Ímpares de 0 a 20 (para)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) escrever(i);
  }
});
