/**
 * Manzano - L02H: Maior e menor de cinco valores
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let maior;
  let menor;
  for (let i = 1; i <= 5; i++) {
    const n = await lerNumero(`Número ${i}:`);
    if (i === 1 || n > maior) maior = n;
    if (i === 1 || n < menor) menor = n;
  }
  escrever(`Maior: ${maior}`);
  escrever(`Menor: ${menor}`);
});
