/**
 * Faccat - Exercício 61: Média aritmética de 10 valores
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += await lerNumero(`Valor ${i}:`);
  }
  escrever(`Média: ${soma / 10}`);
});
