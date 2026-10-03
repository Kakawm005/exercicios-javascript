/**
 * Manzano - L01_COMPL_B: Novo salário com percentual de reajuste
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const sm = await lerNumero('Salário mensal (SM):');
  const pr = await lerNumero('Percentual de reajuste (PR %):');
  const ns = sm + (sm * pr) / 100;
  escrever(`Novo salário (NS): R$ ${ns.toFixed(2)}`);
});
