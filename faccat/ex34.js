/**
 * Faccat - Exercício 34: Teste de mesa de z = (x*y) + 5
 */
const { escrever, executar } = require('../util');

executar(async () => {
  // Os valores do enunciado não constam no PDF; abaixo, alguns casos de exemplo.
  const casos = [[2, 3], [4, 5], [0, 7], [-1, 6]];
  escrever('x\ty\tz = (x*y)+5');
  for (const [x, y] of casos) {
    const z = x * y + 5;
    escrever(`${x}\t${y}\t${z}`);
  }
});
