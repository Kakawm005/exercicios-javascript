/**
 * Faccat - Exercício 42: Idade, tempo de trabalho e aposentadoria
 */
const { lerNumero, lerTexto, escrever, executar } = require('../util');

executar(async () => {
  // Regra adotada: idade >= 65, ou tempo >= 30, ou (idade >= 60 e tempo >= 25).
  const codigo = await lerTexto('Código do empregado:');
  const anoAtual = await lerNumero('Ano atual:');
  const nascimento = await lerNumero('Ano de nascimento:');
  const ingresso = await lerNumero('Ano de ingresso na empresa:');
  const idade = anoAtual - nascimento;
  const tempo = anoAtual - ingresso;
  const requer = idade >= 65 || tempo >= 30 || (idade >= 60 && tempo >= 25);
  escrever(`Empregado ${codigo}: ${idade} anos de idade, ${tempo} anos de empresa.`);
  escrever(requer ? 'REQUER aposentadoria.' : 'NÃO requer aposentadoria.');
});
