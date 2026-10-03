/**
 * Faccat - Exercício 40: Total, desconto e total a pagar (2%, 3% ou 5% por quantidade)
 */
const { lerNumero, lerTexto, escrever, executar } = require('../util');

executar(async () => {
  // Faixas adotadas: até 5 unid. = 2% | de 6 a 10 = 3% | acima de 10 = 5%
  const nome = await lerTexto('Nome do produto:');
  const qtd = await lerNumero('Quantidade adquirida:');
  const preco = await lerNumero('Preço unitário:');
  const total = qtd * preco;
  const taxa = qtd <= 5 ? 0.02 : qtd <= 10 ? 0.03 : 0.05;
  const desconto = total * taxa;
  escrever(`Produto: ${nome}`);
  escrever(`Total: R$ ${total.toFixed(2)}`);
  escrever(`Desconto (${taxa * 100}%): R$ ${desconto.toFixed(2)}`);
  escrever(`Total a pagar: R$ ${(total - desconto).toFixed(2)}`);
});
