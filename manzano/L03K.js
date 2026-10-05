// Manzano - L03K: Área total de uma residência (enquanto)

var total = 0;
var continuar = "SIM";
while (continuar != "NAO") {
  var nome = prompt("Nome do cômodo:");
  var largura = Number(prompt("Largura (m):"));
  var comprimento = Number(prompt("Comprimento (m):"));
  var area = largura * comprimento;
  total = total + area;
  console.log("Área de " + nome + ": " + area + " m²");
  continuar = prompt("Deseja continuar calculando cômodos? (SIM/NAO)");
}
console.log("Área total da residência: " + total + " m²");
