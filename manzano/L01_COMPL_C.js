/**
 * Manzano - L01_COMPL_C: Apuração de eleição sindical (candidatos A, B e C)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const a = await lerNumero('Votos válidos do candidato A:');
  const b = await lerNumero('Votos válidos do candidato B:');
  const c = await lerNumero('Votos válidos do candidato C:');
  const nulos = await lerNumero('Votos nulos:');
  const brancos = await lerNumero('Votos em branco:');
  const validos = a + b + c;
  const total = validos + nulos + brancos;
  if (total === 0) {
    escrever('Nenhum voto informado.');
    return;
  }
  const pct = (v) => ((v / total) * 100).toFixed(2);
  escrever(`Total de eleitores: ${total}`);
  escrever(`Votos válidos: ${pct(validos)}%`);
  escrever(`Candidato A: ${pct(a)}%`);
  escrever(`Candidato B: ${pct(b)}%`);
  escrever(`Candidato C: ${pct(c)}%`);
  escrever(`Votos nulos: ${pct(nulos)}%`);
  escrever(`Votos em branco: ${pct(brancos)}%`);
});
