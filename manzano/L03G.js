/**
 * Manzano - L03G: Série de Fibonacci até o 15º termo (enquanto)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let anterior = 1;
  let atual = 1;
  let termo = 1;
  const serie = [];
  while (termo <= 15) {
    serie.push(anterior);
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
    termo++;
  }
  escrever(serie.join(', '));
});
