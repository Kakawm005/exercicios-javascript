/**
 * Manzano - L03B: Soma dos cem primeiros inteiros (enquanto)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let i = 1;
  let soma = 0;
  while (i <= 100) {
    soma += i;
    i++;
  }
  escrever(`Soma de 1 a 100: ${soma}`);
});
