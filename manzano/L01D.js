/**
 * Manzano - L01D: Litros de combustível gastos em uma viagem (12 km/L)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const tempo = await lerNumero('Tempo gasto na viagem (horas):');
  const velocidade = await lerNumero('Velocidade média (km/h):');
  const distancia = tempo * velocidade;
  const litrosUsados = distancia / 12;
  escrever(`Velocidade média: ${velocidade} km/h`);
  escrever(`Tempo gasto: ${tempo} h`);
  escrever(`Distância percorrida: ${distancia} km`);
  escrever(`Litros usados: ${litrosUsados.toFixed(2)} L`);
});
