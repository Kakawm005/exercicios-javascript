/**
 * Faccat - Exercício 16: Custo das maçãs (R$ 1,30 a unidade; R$ 1,00 a partir de 12)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const qtd = await lerNumero('Número de maçãs compradas:');
  const preco = qtd < 12 ? 1.3 : 1.0;
  escrever(`Custo total: R$ ${(qtd * preco).toFixed(2)}`);
});
