/**
 * Manzano - L04I: Maior e menor valor até um negativo ser informado (repita)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let maior = null;
  let menor = null;
  let n;
  do {
    n = await lerNumero('Valor inteiro positivo (negativo encerra):');
    if (n >= 0) {
      if (maior === null || n > maior) maior = n;
      if (menor === null || n < menor) menor = n;
    }
  } while (n >= 0);
  if (maior === null) escrever('Nenhum valor válido foi informado.');
  else escrever(`Maior: ${maior} | Menor: ${menor}`);
});
