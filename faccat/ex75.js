/**
 * Faccat - Exercício 75: Sequências de 1 a 10 com repetição aninhada (versão de exemplo)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  // ATENÇÃO: as sequências do enunciado não constam no PDF recebido.
  // Abaixo, três padrões clássicos com laços aninhados; ajuste conforme a apostila.
  escrever('Sequência 1 (triângulo crescente):');
  for (let i = 1; i <= 10; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) linha += `${j} `;
    escrever(linha.trim());
  }
  escrever('\nSequência 2 (triângulo decrescente):');
  for (let i = 10; i >= 1; i--) {
    let linha = '';
    for (let j = 1; j <= i; j++) linha += `${j} `;
    escrever(linha.trim());
  }
  escrever('\nSequência 3 (cada número repetido por ele mesmo):');
  for (let i = 1; i <= 10; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) linha += `${i} `;
    escrever(linha.trim());
  }
});
