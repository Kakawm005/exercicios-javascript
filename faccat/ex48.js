/**
 * Faccat - Exercício 48: Média de duas notas aceitando apenas valores entre 0 e 10
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  async function lerNota(msg) {
    let nota;
    do {
      nota = await lerNumero(msg);
      if (nota < 0 || nota > 10) escrever('Nota inválida. Use valores de 0 a 10.');
    } while (nota < 0 || nota > 10);
    return nota;
  }
  const n1 = await lerNota('Nota da 1ª avaliação:');
  const n2 = await lerNota('Nota da 2ª avaliação:');
  escrever(`Média: ${((n1 + n2) / 2).toFixed(2)}`);
});
