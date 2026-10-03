/**
 * Manzano - L05F: Números divisíveis por 4 menores que 200 (para)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  for (let i = 1; i < 200; i++) {
    if (i % 4 === 0) escrever(i);
  }
});
