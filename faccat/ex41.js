/**
 * Faccat - Exercício 41: Média de aproveitamento e conceito
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  // Conceitos adotados: A >= 9 | B >= 7,5 | C >= 6 | D >= 4 | E < 4
  const n1 = await lerNumero('Nota 1:');
  const n2 = await lerNumero('Nota 2:');
  const n3 = await lerNumero('Nota 3:');
  const exercicios = await lerNumero('Média dos exercícios:');
  const media = (n1 + n2 * 2 + n3 * 3 + exercicios) / 7;
  let conceito;
  if (media >= 9) conceito = 'A';
  else if (media >= 7.5) conceito = 'B';
  else if (media >= 6) conceito = 'C';
  else if (media >= 4) conceito = 'D';
  else conceito = 'E';
  escrever(`Média de aproveitamento: ${media.toFixed(2)} - Conceito ${conceito}`);
});
