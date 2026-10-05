// Manzano - L03H: Tabela Celsius x Fahrenheit de 10 em 10 graus (enquanto)

var c = 10;
while (c <= 100) {
  var f = (9 * c + 160) / 5;
  console.log(c + " graus C = " + f + " graus F");
  c = c + 10;
}
