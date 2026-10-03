/**
 * Faccat - Exercício 63: Soma de 10 números
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += await lerNumero(`Número ${i}:`);
  }
  escrever(`Soma total: ${soma}`);
});
