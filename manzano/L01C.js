/**
 * Manzano - L01C: Volume de uma lata de óleo (π * raio² * altura)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const raio = await lerNumero('Raio:');
  const altura = await lerNumero('Altura:');
  const volume = Math.PI * raio ** 2 * altura;
  escrever(`Volume: ${volume.toFixed(2)}`);
});
