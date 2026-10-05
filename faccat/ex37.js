// Faccat - Exercício 37: Fruteira: morangos e maçãs com desconto de 10%

// preços que usei (não estão no PDF):
// Morango: R$ 2,50 o kg até 5 kg; R$ 2,20 o kg acima de 5 kg
// Maçã: R$ 1,80 o kg até 5 kg; R$ 1,50 o kg acima de 5 kg
// Desconto de 10% se passar de 8 kg no total ou de R$ 25,00
var kgMorango = Number(prompt("Quilos de morango:"));
var kgMaca = Number(prompt("Quilos de maçã:"));
var precoMorango, precoMaca;

if (kgMorango <= 5) {
  precoMorango = 2.50;
} else {
  precoMorango = 2.20;
}
if (kgMaca <= 5) {
  precoMaca = 1.80;
} else {
  precoMaca = 1.50;
}

var total = kgMorango * precoMorango + kgMaca * precoMaca;
if (kgMorango + kgMaca > 8 || total > 25) {
  total = total - total * 10 / 100;
  console.log("Desconto de 10% aplicado");
}
console.log("Valor total: R$ " + total);
