/**
 * Manzano - L05I: Série de Fibonacci até o 15º termo (para)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let anterior = 1;
  let atual = 1;
  const serie = [];
  for (let termo = 1; termo <= 15; termo++) {
    serie.push(anterior);
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
  escrever(serie.join(', '));
});
