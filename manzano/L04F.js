/**
 * Manzano - L04F: Soma, média e total de valores lidos (para ao digitar negativo)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let soma = 0;
  let qtd = 0;
  let n;
  do {
    n = await lerNumero('Valor positivo (negativo encerra):');
    if (n >= 0) {
      soma += n;
      qtd++;
    }
  } while (n >= 0);
  escrever(`Total de valores lidos: ${qtd}`);
  escrever(`Somatório: ${soma}`);
  escrever(qtd > 0 ? `Média: ${soma / qtd}` : 'Média: não calculada (nenhum valor lido).');
});
