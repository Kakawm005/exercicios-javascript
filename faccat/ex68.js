/**
 * Faccat - Exercício 68: Valor total em estoque e média (quantidade informada)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const n = await lerNumero('Número total de mercadorias:');
  if (n <= 0) {
    escrever('Informe ao menos uma mercadoria.');
    return;
  }
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += await lerNumero(`Valor da mercadoria ${i}:`);
  }
  escrever(`Valor total em estoque: R$ ${total.toFixed(2)}`);
  escrever(`Média de valor: R$ ${(total / n).toFixed(2)}`);
});
