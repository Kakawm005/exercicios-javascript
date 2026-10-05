// Manzano - L04H: Área total de uma residência (repita)

var total = 0;
var continuar;
do {
  var nome = prompt("Nome do cômodo:");
  var largura = Number(prompt("Largura (m):"));
  var comprimento = Number(prompt("Comprimento (m):"));
  var area = largura * comprimento;
  total = total + area;
  console.log("Área de " + nome + ": " + area + " m²");
  continuar = prompt("Deseja continuar calculando cômodos? (SIM/NAO)");
} while (continuar != "NAO");
console.log("Área total da residência: " + total + " m²");
