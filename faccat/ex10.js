/**
 * Faccat - Exercício 10: Custo final de um carro ao consumidor
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const custoFabrica = await lerNumero('Custo de fábrica:');
  const distribuidor = custoFabrica * 0.28;
  const impostos = custoFabrica * 0.45;
  escrever(`Custo final ao consumidor: R$ ${(custoFabrica + distribuidor + impostos).toFixed(2)}`);
});
