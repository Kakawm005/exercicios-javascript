/**
 * Manzano - L05D: Somatório dos pares de 1 a 500 (para)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let soma = 0;
  for (let i = 1; i <= 500; i++) {
    if (i % 2 === 0) soma += i;
  }
  escrever(`Somatório dos pares de 1 a 500: ${soma}`);
});
