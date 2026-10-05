// Faccat - Exercício 69: Valor total e média sem informar a quantidade (MAIS MERCADORIAS)

var total = 0;
var qtd = 0;
var resposta;
do {
  var valor = Number(prompt("Valor da mercadoria:"));
  total = total + valor;
  qtd = qtd + 1;
  resposta = prompt("MAIS MERCADORIAS (S/N)?");
} while (resposta == "S" || resposta == "s");

console.log("Valor total em estoque: R$ " + total);
console.log("Média de valor: R$ " + total / qtd);
