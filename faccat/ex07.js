/**
 * Faccat - Exercício 7: Idade em anos, meses e dias convertida para dias
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const anos = await lerNumero('Anos:');
  const meses = await lerNumero('Meses:');
  const dias = await lerNumero('Dias:');
  escrever(`Idade em dias: ${anos * 365 + meses * 30 + dias}`);
});
