/**
 * Manzano - L03C: Somatório dos pares de 1 a 500 (enquanto)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let i = 1;
  let soma = 0;
  while (i <= 500) {
    if (i % 2 === 0) soma += i;
    i++;
  }
  escrever(`Somatório dos pares de 1 a 500: ${soma}`);
});
