// Manzano - L05H: Potência B elevado a E (para, sem usar potência)

var base = Number(prompt("Digite a base:"));
var expoente = Number(prompt("Digite o expoente (inteiro positivo):"));
var resultado = 1;
for (var i = 1; i <= expoente; i++) {
  resultado = resultado * base;
}
console.log(base + " elevado a " + expoente + " = " + resultado);
