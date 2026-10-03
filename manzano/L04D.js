/**
 * Manzano - L04D: Grãos de trigo no tabuleiro de xadrez (repita)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let casa = 1;
  let graos = 1;
  let total = 0;
  do {
    total += graos;
    graos *= 2;
    casa++;
  } while (casa <= 64);
  escrever(`Total de grãos (real): ${total.toLocaleString('pt-BR')}`);
  escrever(`Valor exato: ${(2n ** 64n - 1n).toLocaleString('pt-BR')}`);
});
