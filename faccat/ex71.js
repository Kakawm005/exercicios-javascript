/**
 * Faccat - Exercício 71: Maior número e média de uma quantidade de números
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const qtd = await lerNumero('Quantidade de números:');
  if (qtd <= 0) {
    escrever('A quantidade deve ser maior que zero.');
    return;
  }
  let soma = 0;
  let maior = -Infinity;
  for (let i = 1; i <= qtd; i++) {
    const n = await lerNumero(`Número ${i}:`);
    soma += n;
    if (n > maior) maior = n;
  }
  escrever(`Maior número: ${maior}`);
  escrever(`Média: ${soma / qtd}`);
});
