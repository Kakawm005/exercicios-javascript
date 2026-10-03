/**
 * Manzano - L03F: Potência B^E (enquanto, sem operador ^)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const base = await lerNumero('Base:');
  const expoente = await lerNumero('Expoente (inteiro):');
  let resultado = 1;
  let cont = 0;
  while (cont < Math.abs(expoente)) {
    resultado *= base;
    cont++;
  }
  if (expoente < 0) resultado = 1 / resultado;
  escrever(`${base}^${expoente} = ${resultado}`);
});
