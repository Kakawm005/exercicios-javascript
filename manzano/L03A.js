// Manzano - L03A: Tabuada de 1 a 10 de um número (enquanto)

var n = Number(prompt("Digite o número da tabuada:"));
var i = 1;
while (i <= 10) {
  console.log(n + " x " + i + " = " + n * i);
  i = i + 1;
}
