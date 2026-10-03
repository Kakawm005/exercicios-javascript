/**
 * Manzano - L01J: Conversão de dólar para real
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const cotacao = await lerNumero('Cotação do dólar (R$):');
  const dolares = await lerNumero('Quantidade de dólares:');
  escrever(`US$ ${dolares} = R$ ${(dolares * cotacao).toFixed(2)}`);
});
