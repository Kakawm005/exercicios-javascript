/**
 * Faccat - Exercício 84: Vetor Soma = A + B (posição a posição)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const N = await lerNumero('Tamanho dos vetores (N):');
  const A = [];
  const B = [];
  for (let i = 0; i < N; i++) A.push(await lerNumero(`A[${i}]:`));
  for (let i = 0; i < N; i++) B.push(await lerNumero(`B[${i}]:`));
  const Soma = [];
  for (let i = 0; i < N; i++) {
    Soma[i] = A[i] + B[i];
  }
  escrever(`Soma = [${Soma.join(', ')}]`);
});
