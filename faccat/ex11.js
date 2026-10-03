/**
 * Faccat - Exercício 11: Salário final do vendedor de carros usados
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const carros = await lerNumero('Número de carros vendidos:');
  const totalVendas = await lerNumero('Valor total das vendas:');
  const fixo = await lerNumero('Salário fixo:');
  const porCarro = await lerNumero('Valor recebido por carro vendido:');
  const salario = fixo + carros * porCarro + totalVendas * 0.05;
  escrever(`Salário final: R$ ${salario.toFixed(2)}`);
});
