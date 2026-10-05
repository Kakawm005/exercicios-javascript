// Manzano - L02F: Três valores em ordem crescente

var a = Number(prompt("Digite A:"));
var b = Number(prompt("Digite B:"));
var c = Number(prompt("Digite C:"));
var aux;

if (a > b) {
  aux = a;
  a = b;
  b = aux;
}
if (a > c) {
  aux = a;
  a = c;
  c = aux;
}
if (b > c) {
  aux = b;
  b = c;
  c = aux;
}
console.log("Ordem crescente: " + a + ", " + b + ", " + c);
