// Faccat - Exercício 82: Vetor M = A * X

var A = [];
var M = [];
for (var i = 0; i < 10; i++) {
  A[i] = Number(prompt("Digite A[" + i + "]:"));
}
var X = Number(prompt("Digite o valor de X:"));

for (var i = 0; i < 10; i++) {
  M[i] = A[i] * X;
  console.log("M[" + i + "] = " + M[i]);
}
