/**
 * Faccat - Exercício 67: Média dos inteiros entre 15 e 100
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let soma = 0;
  let qtd = 0;
  for (let i = 15; i <= 100; i++) {
    soma += i;
    qtd++;
  }
  escrever(`Média: ${soma / qtd}`);
});
