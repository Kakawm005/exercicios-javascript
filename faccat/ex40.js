// Faccat - Exercício 40: Total, desconto e total a pagar (2%, 3% ou 5% por quantidade)

// faixas que usei: até 5 unidades = 2% | de 6 a 10 = 3% | acima de 10 = 5%
var nome = prompt("Nome do produto:");
var qtd = Number(prompt("Quantidade adquirida:"));
var preco = Number(prompt("Preço unitário:"));
var total = qtd * preco;
var taxa;

if (qtd <= 5) {
  taxa = 2;
} else if (qtd <= 10) {
  taxa = 3;
} else {
  taxa = 5;
}

var desconto = total * taxa / 100;
console.log("Produto: " + nome);
console.log("Total: R$ " + total);
console.log("Desconto de " + taxa + "%: R$ " + desconto);
console.log("Total a pagar: R$ " + (total - desconto));
