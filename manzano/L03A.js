/**
 * Manzano - L03A: Tabuada de 1 a 10 de um número (enquanto)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const n = await lerNumero('Número da tabuada:');
  let i = 1;
  while (i <= 10) {
    escrever(`${n} x ${i} = ${n * i}`);
    i++;
  }
});
