/**
 * Manzano - L05B: Tabuada de 1 a 10 de um número (para)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const n = await lerNumero('Número da tabuada:');
  for (let i = 1; i <= 10; i++) {
    escrever(`${n} x ${i} = ${n * i}`);
  }
});
