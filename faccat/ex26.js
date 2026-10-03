/**
 * Faccat - Exercício 26: Controle de estoque médio
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const atual = await lerNumero('Quantidade atual em estoque:');
  const maxima = await lerNumero('Quantidade máxima:');
  const minima = await lerNumero('Quantidade mínima:');
  const media = (maxima + minima) / 2;
  escrever(`Quantidade média: ${media}`);
  escrever(atual < media ? 'Deve efetuar compra.' : 'Não é necessário efetuar compra.');
});
