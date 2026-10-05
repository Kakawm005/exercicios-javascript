// Manzano - L05K: Fatorial dos ímpares de 1 a 10 (para)

for (var n = 1; n <= 10; n = n + 2) {
  var fatorial = 1;
  for (var k = 2; k <= n; k++) {
    fatorial = fatorial * k;
  }
  console.log("Fatorial de " + n + " = " + fatorial);
}
