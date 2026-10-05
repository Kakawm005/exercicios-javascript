// Manzano - L04E: Somatório do fatorial de 15 valores (repita)

var i = 1;
var somaFatoriais = 0;
do {
  var n = Number(prompt("Digite o valor " + i + ":"));
  var fatorial = 1;
  var k = 2;
  while (k <= n) {
    fatorial = fatorial * k;
    k = k + 1;
  }
  console.log("Fatorial de " + n + " = " + fatorial);
  somaFatoriais = somaFatoriais + fatorial;
  i = i + 1;
} while (i <= 15);
console.log("Somatório dos fatoriais: " + somaFatoriais);
