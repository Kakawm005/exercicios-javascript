// Manzano - L05G: Potências de 3 do expoente 0 ao 15 (para, sem usar potência)

var resultado = 1;
for (var expoente = 0; expoente <= 15; expoente++) {
  console.log("3 elevado a " + expoente + " = " + resultado);
  resultado = resultado * 3;
}
