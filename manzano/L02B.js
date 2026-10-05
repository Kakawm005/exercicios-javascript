// Manzano - L02B: Módulo de um número

var n = Number(prompt("Digite um valor:"));
if (n < 0) {
  n = n * -1;
}
console.log("Módulo: " + n);
