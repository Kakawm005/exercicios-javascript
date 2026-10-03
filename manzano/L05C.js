/**
 * Manzano - L05C: Soma dos cem primeiros inteiros (para)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let soma = 0;
  for (let i = 1; i <= 100; i++) soma += i;
  escrever(`Soma de 1 a 100: ${soma}`);
});
