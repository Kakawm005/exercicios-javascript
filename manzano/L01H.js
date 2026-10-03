/**
 * Manzano - L01H: Volume de uma caixa retangular
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const comprimento = await lerNumero('Comprimento:');
  const largura = await lerNumero('Largura:');
  const altura = await lerNumero('Altura:');
  escrever(`Volume: ${comprimento * largura * altura}`);
});
