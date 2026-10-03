/**
 * Faccat - Exercício 18: Pode votar este ano? (a partir de 16 anos)
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  const anoAtual = await lerNumero('Ano atual:');
  const anoNascimento = await lerNumero('Ano de nascimento:');
  const idade = anoAtual - anoNascimento;
  escrever(idade >= 16 ? `Com ${idade} anos, poderá votar este ano.` : `Com ${idade} anos, NÃO poderá votar este ano.`);
});
