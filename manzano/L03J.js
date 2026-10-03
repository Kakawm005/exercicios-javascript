/**
 * Manzano - L03J: Soma e média dos pares de 50 a 70 (enquanto)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let n = 50;
  let soma = 0;
  let qtd = 0;
  while (n <= 70) {
    if (n % 2 === 0) {
      soma += n;
      qtd++;
    }
    n++;
  }
  escrever(`Soma: ${soma}`);
  escrever(`Média: ${soma / qtd}`);
});
