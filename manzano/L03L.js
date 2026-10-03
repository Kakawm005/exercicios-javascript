/**
 * Manzano - L03L: Maior e menor valor até um negativo ser informado (enquanto)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let n = await lerNumero('Valor inteiro positivo (negativo encerra):');
  let maior = null;
  let menor = null;
  while (n >= 0) {
    if (maior === null || n > maior) maior = n;
    if (menor === null || n < menor) menor = n;
    n = await lerNumero('Valor inteiro positivo (negativo encerra):');
  }
  if (maior === null) escrever('Nenhum valor válido foi informado.');
  else escrever(`Maior: ${maior} | Menor: ${menor}`);
});
