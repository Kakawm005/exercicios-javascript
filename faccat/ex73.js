/**
 * Faccat - Exercício 73: Pesquisa de salário e número de filhos dos habitantes
 */
const { lerNumero, lerSimNao, escrever, executar } = require('../util');

executar(async () => {
  let habitantes = 0;
  let somaSalarios = 0;
  let somaFilhos = 0;
  let maiorSalario = -Infinity;
  let abaixo150 = 0;
  let mais;
  do {
    const salario = await lerNumero('Salário do habitante:');
    const filhos = await lerNumero('Número de filhos:');
    habitantes++;
    somaSalarios += salario;
    somaFilhos += filhos;
    if (salario > maiorSalario) maiorSalario = salario;
    if (salario < 150) abaixo150++;
    mais = await lerSimNao('Mais habitantes (S/N)?');
  } while (mais);
  escrever(`Média de salário: R$ ${(somaSalarios / habitantes).toFixed(2)}`);
  escrever(`Média de filhos: ${(somaFilhos / habitantes).toFixed(2)}`);
  escrever(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
  escrever(`Pessoas com salário menor que R$ 150,00: ${((abaixo150 / habitantes) * 100).toFixed(2)}%`);
});
