/**
 * Manzano - L01K: Conversão de real para dólar
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const cotacao = await lerNumero('Cotação do dólar (R$):');
  const reais = await lerNumero('Quantidade de reais:');
  escrever(`R$ ${reais} = US$ ${(reais / cotacao).toFixed(2)}`);
});
