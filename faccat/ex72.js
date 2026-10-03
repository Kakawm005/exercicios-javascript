/**
 * Faccat - Exercício 72: Maior preço e média de preços de 15 produtos
 */
const { lerNumero, lerTexto, escrever, executar } = require('../util');

executar(async () => {
  let soma = 0;
  let maior = -Infinity;
  for (let i = 1; i <= 15; i++) {
    const codigo = await lerTexto(`Código do produto ${i}:`);
    const preco = await lerNumero(`Preço do produto ${codigo}:`);
    soma += preco;
    if (preco > maior) maior = preco;
  }
  escrever(`Maior preço: R$ ${maior.toFixed(2)}`);
  escrever(`Média dos preços: R$ ${(soma / 15).toFixed(2)}`);
});
