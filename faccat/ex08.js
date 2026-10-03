/**
 * Faccat - Exercício 8: Percentual de votos brancos, nulos e válidos
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const total = await lerNumero('Total de eleitores:');
  const brancos = await lerNumero('Votos brancos:');
  const nulos = await lerNumero('Votos nulos:');
  const validos = await lerNumero('Votos válidos:');
  if (total <= 0) {
    escrever('O total de eleitores deve ser maior que zero.');
    return;
  }
  const pct = (v) => ((v / total) * 100).toFixed(2);
  escrever(`Brancos: ${pct(brancos)}%`);
  escrever(`Nulos: ${pct(nulos)}%`);
  escrever(`Válidos: ${pct(validos)}%`);
});
