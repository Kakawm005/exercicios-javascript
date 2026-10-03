/**
 * Manzano - L01G: Adição e multiplicação aos pares de quatro inteiros
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('A:');
  const b = await lerNumero('B:');
  const c = await lerNumero('C:');
  const d = await lerNumero('D:');
  const pares = [['A', a, 'B', b], ['A', a, 'C', c], ['A', a, 'D', d], ['B', b, 'C', c], ['B', b, 'D', d], ['C', c, 'D', d]];
  for (const [n1, v1, n2, v2] of pares) {
    escrever(`${n1} + ${n2} = ${v1 + v2}`);
    escrever(`${n1} * ${n2} = ${v1 * v2}`);
  }
});
