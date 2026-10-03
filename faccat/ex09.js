/**
 * Faccat - Exercício 9: Novo salário com reajuste percentual
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const salario = await lerNumero('Salário mensal atual:');
  const percentual = await lerNumero('Percentual de reajuste (%):');
  const novo = salario + (salario * percentual) / 100;
  escrever(`Novo salário: R$ ${novo.toFixed(2)}`);
});
