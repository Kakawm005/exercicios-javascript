/**
 * Manzano - L02G: Números divisíveis por 2 e 3 (entre quatro lidos)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let achou = false;
  for (let i = 1; i <= 4; i++) {
    const n = await lerNumero(`Número ${i}:`);
    if (n % 2 === 0 && n % 3 === 0) {
      escrever(`${n} é divisível por 2 e por 3`);
      achou = true;
    }
  }
  if (!achou) escrever('Nenhum dos números é divisível por 2 e 3 ao mesmo tempo.');
});
