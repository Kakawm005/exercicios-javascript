/**
 * Manzano - L03I: Soma e média de 10 valores (enquanto)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let i = 1;
  let soma = 0;
  while (i <= 10) {
    soma += await lerNumero(`Valor ${i}:`);
    i++;
  }
  escrever(`Soma: ${soma}`);
  escrever(`Média: ${soma / 10}`);
});
