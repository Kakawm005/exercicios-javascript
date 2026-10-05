// Faccat - Exercício 75: Sequências de 1 a 10 com repetição aninhada (versão de exemplo)

// atenção: as sequências do enunciado não estão no PDF.
// Fiz três exemplos com um laço dentro do outro, é só ajustar conforme a apostila.

console.log("Sequência 1:");
for (var i = 1; i <= 10; i++) {
  var linha = "";
  for (var j = 1; j <= i; j++) {
    linha = linha + j + " ";
  }
  console.log(linha);
}

console.log("Sequência 2:");
for (var i = 10; i >= 1; i--) {
  var linha = "";
  for (var j = 1; j <= i; j++) {
    linha = linha + j + " ";
  }
  console.log(linha);
}

console.log("Sequência 3:");
for (var i = 1; i <= 10; i++) {
  var linha = "";
  for (var j = 1; j <= i; j++) {
    linha = linha + i + " ";
  }
  console.log(linha);
}
