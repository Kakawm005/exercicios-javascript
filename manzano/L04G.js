// Manzano - L04G: Fatorial dos ímpares de 1 a 10 (repita)

var n = 1;
do {
  var fatorial = 1;
  var k = 2;
  while (k <= n) {
    fatorial = fatorial * k;
    k = k + 1;
  }
  console.log("Fatorial de " + n + " = " + fatorial);
  n = n + 2;
} while (n <= 10);
