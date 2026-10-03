/**
 * Faccat - Exercício 22: Salário com horas extras (50% de acréscimo)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  // Jornada semanal de 40h; considerando o mês com 4 semanas, o limite mensal é 160h.
  const LIMITE_MES = 40 * 4;
  const horas = await lerNumero('Horas trabalhadas no mês:');
  const valorHora = await lerNumero('Salário por hora:');
  const normais = Math.min(horas, LIMITE_MES);
  const extras = Math.max(0, horas - LIMITE_MES);
  const total = normais * valorHora + extras * valorHora * 1.5;
  escrever(`Salário total: R$ ${total.toFixed(2)}`);
});
