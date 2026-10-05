// Faccat - Exercício 68: Valor total em estoque e média (quantidade informada)

var n = Number(prompt("Número total de mercadorias:"));
var total = 0;
if (n > 0) {
  for (var i = 1; i <= n; i++) {
    var valor = Number(prompt("Valor da mercadoria " + i + ":"));
    total = total + valor;
  }
  console.log("Valor total em estoque: R$ " + total);
  console.log("Média de valor: R$ " + total / n);
} else {
  console.log("Informe pelo menos uma mercadoria");
}
