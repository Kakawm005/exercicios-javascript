/**
 * Faccat - Exercício 6: Área de um retângulo
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const base = await lerNumero('Base do retângulo:');
  const altura = await lerNumero('Altura do retângulo:');
  escrever(`Área: ${base * altura}`);
});
