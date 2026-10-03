/**
 * Faccat - Exercício 35: Posto de combustível: valor a pagar com desconto por quantidade
 */
const { lerNumero, lerTexto, escrever, executar } = require('../util');

executar(async () => {
  // Preços/descontos adotados (não constam no PDF):
  //   Álcool: R$ 1,90/L - até 20 L: 3% | acima de 20 L: 5%
  //   Gasolina: R$ 2,50/L - até 20 L: 4% | acima de 20 L: 6%
  const tipo = (await lerTexto('Combustível (A = álcool, G = gasolina):')).toUpperCase();
  const litros = await lerNumero('Quantidade de litros:');
  let preco;
  let desconto;
  if (tipo === 'A') {
    preco = 1.9;
    desconto = litros <= 20 ? 0.03 : 0.05;
  } else if (tipo === 'G') {
    preco = 2.5;
    desconto = litros <= 20 ? 0.04 : 0.06;
  } else {
    escrever('Tipo de combustível inválido.');
    return;
  }
  const aPagar = litros * preco * (1 - desconto);
  escrever(`Valor a pagar: R$ ${aPagar.toFixed(2)}`);
});
