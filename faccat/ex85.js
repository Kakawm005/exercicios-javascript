/**
 * Faccat - Exercício 85: Temperaturas do ano: menor, maior, média e dias abaixo da média
 */
const { lerNumero, lerSimNao, escrever, executar } = require('../util');

executar(async () => {
  const DIAS = 365;
  const aleatorio = await lerSimNao('Gerar temperaturas aleatórias para teste (S/N)?');
  const temps = [];
  for (let d = 1; d <= DIAS; d++) {
    if (aleatorio) temps.push(Math.round((10 + Math.random() * 25) * 10) / 10);
    else temps.push(await lerNumero(`Temperatura média do dia ${d}:`));
  }
  const media = temps.reduce((s, t) => s + t, 0) / DIAS;
  let abaixo = 0;
  for (const t of temps) {
    if (t < media) abaixo++;
  }
  escrever(`Menor temperatura: ${Math.min(...temps)}`);
  escrever(`Maior temperatura: ${Math.max(...temps)}`);
  escrever(`Média anual: ${media.toFixed(2)}`);
  escrever(`Dias abaixo da média: ${abaixo}`);
});
