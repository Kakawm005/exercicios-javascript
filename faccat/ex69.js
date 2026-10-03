/**
 * Faccat - Exercício 69: Valor total e média sem informar a quantidade (MAIS MERCADORIAS)
 */
const { lerNumero, lerSimNao, escrever, executar } = require('../util');

executar(async () => {
  let total = 0;
  let qtd = 0;
  let mais;
  do {
    total += await lerNumero(`Valor da mercadoria ${qtd + 1}:`);
    qtd++;
    mais = await lerSimNao('MAIS MERCADORIAS (S/N)?');
  } while (mais);
  escrever(`Valor total em estoque: R$ ${total.toFixed(2)}`);
  escrever(`Média de valor: R$ ${(total / qtd).toFixed(2)}`);
});
