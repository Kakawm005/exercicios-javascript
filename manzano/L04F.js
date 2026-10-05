// Manzano - L04F: Soma, média e total de valores lidos (para ao digitar negativo)

var soma = 0;
var qtd = 0;
var n;
do {
  n = Number(prompt("Digite um valor positivo (negativo para parar):"));
  if (n >= 0) {
    soma = soma + n;
    qtd = qtd + 1;
  }
} while (n >= 0);

console.log("Total de valores lidos: " + qtd);
console.log("Somatório: " + soma);
if (qtd > 0) {
  console.log("Média: " + soma / qtd);
} else {
  console.log("Não deu para calcular a média (nenhum valor lido)");
}
