/**
 * Manzano - L01E: Valor de uma prestação em atraso
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const valor = await lerNumero('Valor da prestação:');
  const taxa = await lerNumero('Taxa de juros (% ao período):');
  const tempo = await lerNumero('Tempo de atraso (períodos):');
  const prestacao = valor + ((valor * taxa) / 100) * tempo;
  escrever(`Valor da prestação em atraso: R$ ${prestacao.toFixed(2)}`);
});
