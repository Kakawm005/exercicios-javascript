/**
 * Manzano - L01F: Troca dos valores de A e B
 */
const { lerTexto, escrever, executar } = require('../util');

executar(async () => {
  let a = await lerTexto('Valor de A:');
  let b = await lerTexto('Valor de B:');
  const auxiliar = a;
  a = b;
  b = auxiliar;
  escrever(`Após a troca: A = ${a} e B = ${b}`);
});
