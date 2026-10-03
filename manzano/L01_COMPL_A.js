/**
 * Manzano - L01_COMPL_A: Produto (A*C) e soma (B+D) de quatro inteiros
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('A:');
  const b = await lerNumero('B:');
  const c = await lerNumero('C:');
  const d = await lerNumero('D:');
  const p = a * c;
  const s = b + d;
  escrever(`P (A * C) = ${p}`);
  escrever(`S (B + D) = ${s}`);
});
