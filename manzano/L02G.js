// Manzano - L02G: Números divisíveis por 2 e 3 (entre quatro lidos)

var achou = 0;
for (var i = 1; i <= 4; i++) {
  var n = Number(prompt("Digite o número " + i + ":"));
  if (n % 2 == 0 && n % 3 == 0) {
    console.log(n + " é divisível por 2 e por 3");
    achou = 1;
  }
}
if (achou == 0) {
  console.log("Nenhum número é divisível por 2 e 3 ao mesmo tempo");
}
