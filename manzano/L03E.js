/**
 * Manzano - L03E: Potências de 3 do expoente 0 ao 15 (enquanto, sem operador ^)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let expoente = 0;
  let resultado = 1;
  while (expoente <= 15) {
    escrever(`3^${expoente} = ${resultado}`);
    resultado *= 3;
    expoente++;
  }
});
