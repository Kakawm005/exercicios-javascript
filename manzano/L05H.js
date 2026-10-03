/**
 * Manzano - L05H: Potência B^E (para, sem operador ^)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const base = await lerNumero('Base:');
  const expoente = await lerNumero('Expoente (inteiro):');
  let resultado = 1;
  for (let i = 1; i <= Math.abs(expoente); i++) {
    resultado *= base;
  }
  if (expoente < 0) resultado = 1 / resultado;
  escrever(`${base}^${expoente} = ${resultado}`);
});
