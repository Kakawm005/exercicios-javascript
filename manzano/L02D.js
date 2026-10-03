/**
 * Manzano - L02D: Média de quatro notas com exame
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  let soma = 0;
  for (let i = 1; i <= 4; i++) soma += await lerNumero(`Nota ${i}:`);
  const media = soma / 4;
  if (media >= 7) {
    escrever('Aluno APROVADO');
    escrever(`Média: ${media.toFixed(2)}`);
  } else {
    const exame = await lerNumero('Nota do exame:');
    const novaMedia = (media + exame) / 2;
    escrever(novaMedia >= 5 ? 'Aluno APROVADO EM EXAME' : 'Aluno REPROVADO');
    escrever(`Média: ${media.toFixed(2)} | Nova média: ${novaMedia.toFixed(2)}`);
  }
});
