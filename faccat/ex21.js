/**
 * Faccat - Exercício 21: Duração de um jogo de xadrez em horas inteiras
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const inicio = await lerNumero('Hora de início (0-23):');
  const fim = await lerNumero('Hora de fim (0-23):');
  const duracao = fim >= inicio ? fim - inicio : 24 - inicio + fim; // termina no dia seguinte
  escrever(`Duração do jogo: ${duracao} hora(s)`);
});
