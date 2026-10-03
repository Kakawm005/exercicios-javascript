/**
 * Faccat - Exercício 82: Vetor M = A * X
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const A = [];
  for (let i = 0; i < 10; i++) {
    A.push(await lerNumero(`A[${i}]:`));
  }
  const X = await lerNumero('Valor de X:');
  const M = [];
  for (let i = 0; i < 10; i++) {
    M[i] = A[i] * X;
  }
  escrever(`M = [${M.join(', ')}]`);
});
