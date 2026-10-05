// Manzano - L03F: Potência B elevado a E (enquanto, sem usar potência)

var base = Number(prompt("Digite a base:"));
var expoente = Number(prompt("Digite o expoente (inteiro positivo):"));
var resultado = 1;
var cont = 1;
while (cont <= expoente) {
  resultado = resultado * base;
  cont = cont + 1;
}
console.log(base + " elevado a " + expoente + " = " + resultado);
