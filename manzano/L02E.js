/**
 * Manzano - L02E: Equação do segundo grau
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('A:');
  const b = await lerNumero('B:');
  const c = await lerNumero('C:');
  if (a === 0) {
    escrever('A deve ser diferente de zero: não é uma equação do 2º grau.');
    return;
  }
  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    escrever('Não existem raízes reais (delta negativo).');
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    escrever(`Delta = ${delta}`);
    escrever(`X1 = ${x1}`);
    escrever(`X2 = ${x2}`);
  }
});
