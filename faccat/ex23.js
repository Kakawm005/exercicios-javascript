/**
 * Faccat - Exercício 23: Peso ideal (masculino: 72,7*h - 58; feminino: 62,1*h - 44,7)
 */
const { lerNumero, lerTexto, escrever, executar } = require('../util');

executar(async () => {
  // OBS.: o algoritmo da apostila (com erros a identificar) não consta no PDF recebido.
  const nome = await lerTexto('Nome:');
  const altura = await lerNumero('Altura (m):');
  const sexo = (await lerTexto('Sexo (M/F):')).toUpperCase();
  let peso;
  if (sexo === 'M') {
    peso = 72.7 * altura - 58;
  } else if (sexo === 'F') {
    peso = 62.1 * altura - 44.7;
  } else {
    escrever('Sexo inválido. Use M ou F.');
    return;
  }
  escrever(`${nome}, seu peso ideal é ${peso.toFixed(2)} kg`);
});
