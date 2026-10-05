// Faccat - Exercício 26: Controle de estoque médio

var atual = Number(prompt("Quantidade atual em estoque:"));
var maxima = Number(prompt("Quantidade máxima:"));
var minima = Number(prompt("Quantidade mínima:"));
var media = (maxima + minima) / 2;
console.log("Quantidade média: " + media);
if (atual < media) {
  console.log("Deve efetuar a compra");
} else {
  console.log("Não precisa comprar");
}
