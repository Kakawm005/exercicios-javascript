/**
 * Faccat - Exercício 66: Soma dos inteiros entre dois valores (qualquer ordem)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('Primeiro valor:');
  const b = await lerNumero('Segundo valor:');
  const inicio = Math.ceil(Math.min(a, b));
  const fim = Math.floor(Math.max(a, b));
  let soma = 0;
  for (let i = inicio; i <= fim; i++) soma += i;
  escrever(`Soma dos inteiros entre ${a} e ${b}: ${soma}`);
});
