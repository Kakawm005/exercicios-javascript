// Faccat - Exercício 35: Posto de combustível: valor a pagar com desconto por quantidade

// preços e descontos que usei (não estão no PDF):
// Álcool: R$ 1,90 o litro - até 20 litros 3% de desconto, acima de 20 litros 5%
// Gasolina: R$ 2,50 o litro - até 20 litros 4% de desconto, acima de 20 litros 6%
var tipo = prompt("Combustível (A = álcool, G = gasolina):");
var litros = Number(prompt("Quantidade de litros:"));
var preco = 0;
var desconto = 0;

if (tipo == "A" || tipo == "a") {
  preco = 1.90;
  if (litros <= 20) {
    desconto = 3;
  } else {
    desconto = 5;
  }
} else if (tipo == "G" || tipo == "g") {
  preco = 2.50;
  if (litros <= 20) {
    desconto = 4;
  } else {
    desconto = 6;
  }
}

if (preco == 0) {
  console.log("Tipo de combustível inválido");
} else {
  var total = litros * preco;
  var valorPagar = total - total * desconto / 100;
  console.log("Valor a pagar: R$ " + valorPagar);
}
