/**
 * Faccat - Exercício 46: Exercício 44 com mensagem VALOR INVÁLIDO
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('Primeiro valor:');
  let b;
  do {
    b = await lerNumero('Segundo valor:');
    if (b === 0) escrever('VALOR INVÁLIDO');
  } while (b === 0);
  escrever(`${a} / ${b} = ${a / b}`);
});
