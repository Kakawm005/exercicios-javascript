// Manzano - L03E: Potências de 3 do expoente 0 ao 15 (enquanto, sem usar potência)

var expoente = 0;
var resultado = 1;
while (expoente <= 15) {
  console.log("3 elevado a " + expoente + " = " + resultado);
  resultado = resultado * 3;
  expoente = expoente + 1;
}
