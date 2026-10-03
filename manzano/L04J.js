/**
 * Manzano - L04J: Divisão inteira por subtrações sucessivas (repita, sem DIV)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const dividendo = await lerNumero('Dividendo (inteiro >= 0):');
  const divisor = await lerNumero('Divisor (inteiro > 0):');
  if (divisor <= 0 || dividendo < 0) {
    escrever('Use dividendo >= 0 e divisor > 0.');
    return;
  }
  let resto = dividendo;
  let quociente = 0;
  while (resto >= divisor) {
    resto -= divisor;
    quociente++;
  }
  escrever(`Quociente: ${quociente} (resto: ${resto})`);
});
