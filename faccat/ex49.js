/**
 * Faccat - Exercício 49: Exercício 48 com NOVO CÁLCULO (S/N)?
 */
const { lerNumero, lerSimNao, escrever, executar } = require('../util');

executar(async () => {
  async function lerNota(msg) {
    let nota;
    do {
      nota = await lerNumero(msg);
      if (nota < 0 || nota > 10) escrever('Nota inválida. Use valores de 0 a 10.');
    } while (nota < 0 || nota > 10);
    return nota;
  }
  let novo;
  do {
    const n1 = await lerNota('Nota da 1ª avaliação:');
    const n2 = await lerNota('Nota da 2ª avaliação:');
    escrever(`Média: ${((n1 + n2) / 2).toFixed(2)}`);
    novo = await lerSimNao('NOVO CÁLCULO (S/N)?');
  } while (novo);
});
