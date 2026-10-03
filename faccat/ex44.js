/**
 * Faccat - Exercício 44: Divisão de dois valores com REPITA (segundo valor diferente de zero)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('Primeiro valor:');
  let b;
  do {
    b = await lerNumero('Segundo valor (não pode ser zero):');
  } while (b === 0);
  escrever(`${a} / ${b} = ${a / b}`);
});
