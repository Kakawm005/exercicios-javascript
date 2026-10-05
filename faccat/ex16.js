// Faccat - Exercício 16: Custo das maçãs (R$ 1,30 a unidade; R$ 1,00 a partir de 12)

var qtd = Number(prompt("Quantas maçãs foram compradas?"));
var custo;
if (qtd < 12) {
  custo = qtd * 1.30;
} else {
  custo = qtd * 1.00;
}
console.log("Custo total: R$ " + custo);
