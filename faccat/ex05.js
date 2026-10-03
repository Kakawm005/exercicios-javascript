/**
 * Faccat - Exercício 5: Ler um valor e escrever o antecessor
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const n = await lerNumero('Digite um valor:');
  escrever(`Antecessor: ${n - 1}`);
});
