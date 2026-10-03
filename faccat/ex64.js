/**
 * Faccat - Exercício 64: Soma dos números lidos com valor inferior a 40
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let soma = 0;
  for (let i = 1; i <= 10; i++) {
    const n = await lerNumero(`Número ${i}:`);
    if (n < 40) soma += n;
  }
  escrever(`Soma dos valores menores que 40: ${soma}`);
});
