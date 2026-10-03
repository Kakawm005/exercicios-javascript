/**
 * Manzano - L05G: Potências de 3 do expoente 0 ao 15 (para, sem operador ^)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  let resultado = 1;
  for (let expoente = 0; expoente <= 15; expoente++) {
    escrever(`3^${expoente} = ${resultado}`);
    resultado *= 3;
  }
});
