/**
 * Faccat - Exercício 24: Salário com comissão de 3% até R$ 1.500 e 5% sobre o excedente
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const fixo = await lerNumero('Salário fixo:');
  const vendas = await lerNumero('Valor das vendas:');
  const LIMITE = 1500;
  const comissao = vendas <= LIMITE ? vendas * 0.03 : LIMITE * 0.03 + (vendas - LIMITE) * 0.05;
  escrever(`Salário total: R$ ${(fixo + comissao).toFixed(2)}`);
});
