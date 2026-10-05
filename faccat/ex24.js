// Faccat - Exercício 24: Salário com comissão de 3% até R$ 1.500 e 5% sobre o excedente

var fixo = Number(prompt("Salário fixo:"));
var vendas = Number(prompt("Valor das vendas:"));
var comissao;
if (vendas <= 1500) {
  comissao = vendas * 3 / 100;
} else {
  comissao = 1500 * 3 / 100 + (vendas - 1500) * 5 / 100;
}
console.log("Salário total: R$ " + (fixo + comissao));
