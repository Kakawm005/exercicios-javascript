// Faccat - Exercício 84: Vetor Soma = A + B (posição a posição)

var N = Number(prompt("Tamanho dos vetores (N):"));
var A = [];
var B = [];
var soma = [];

for (var i = 0; i < N; i++) {
  A[i] = Number(prompt("Digite A[" + i + "]:"));
}
for (var i = 0; i < N; i++) {
  B[i] = Number(prompt("Digite B[" + i + "]:"));
}
for (var i = 0; i < N; i++) {
  soma[i] = A[i] + B[i];
  console.log("Soma[" + i + "] = " + soma[i]);
}
