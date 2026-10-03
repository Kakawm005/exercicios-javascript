/**
 * Manzano - L03D: Ímpares de 0 a 20 (enquanto)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let i = 0;
  while (i <= 20) {
    if (i % 2 !== 0) escrever(i);
    i++;
  }
});
