// Manzano - L03I: Soma e média de 10 valores (enquanto)

var i = 1;
var soma = 0;
while (i <= 10) {
  var valor = Number(prompt("Digite o valor " + i + ":"));
  soma = soma + valor;
  i = i + 1;
}
console.log("Soma: " + soma);
console.log("Média: " + soma / 10);
