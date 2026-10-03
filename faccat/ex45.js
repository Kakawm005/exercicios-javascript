/**
 * Faccat - Exercício 45: Divisão de dois valores com ENQUANTO
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('Primeiro valor:');
  let b = await lerNumero('Segundo valor (não pode ser zero):');
  while (b === 0) {
    b = await lerNumero('Segundo valor (não pode ser zero):');
  }
  escrever(`${a} / ${b} = ${a / b}`);
});
