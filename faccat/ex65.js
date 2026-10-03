/**
 * Faccat - Exercício 65: Soma dos inteiros entre dois valores (primeiro <= segundo)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('Primeiro valor:');
  const b = await lerNumero('Segundo valor (maior ou igual ao primeiro):');
  if (a > b) {
    escrever('O segundo valor deve ser maior ou igual ao primeiro.');
    return;
  }
  let soma = 0;
  for (let i = Math.ceil(a); i <= Math.floor(b); i++) soma += i;
  escrever(`Soma dos inteiros de ${a} a ${b}: ${soma}`);
});
