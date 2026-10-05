// Faccat - Exercício 31: Três lados formam um triângulo?

var a = Number(prompt("Lado A:"));
var b = Number(prompt("Lado B:"));
var c = Number(prompt("Lado C:"));
if (a < b + c && b < a + c && c < a + b) {
  console.log("Os valores FORMAM um triângulo");
} else {
  console.log("Os valores NÃO formam um triângulo");
}
