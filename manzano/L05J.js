/**
 * Manzano - L05J: Tabela Celsius x Fahrenheit de 10 em 10 graus (para)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  for (let c = 10; c <= 100; c += 10) {
    const f = (9 * c + 160) / 5;
    escrever(`${c} °C = ${f} °F`);
  }
});
