/**
 * Manzano - L03H: Tabela Celsius x Fahrenheit de 10 em 10 graus (enquanto)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let c = 10;
  while (c <= 100) {
    const f = (9 * c + 160) / 5;
    escrever(`${c} °C = ${f} °F`);
    c += 10;
  }
});
