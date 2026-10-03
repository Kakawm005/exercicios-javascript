/**
 * Faccat - Exercício 47: Exercício 45 com mensagem VALOR INVÁLIDO
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('Primeiro valor:');
  let b = await lerNumero('Segundo valor:');
  while (b === 0) {
    escrever('VALOR INVÁLIDO');
    b = await lerNumero('Segundo valor:');
  }
  escrever(`${a} / ${b} = ${a / b}`);
});
