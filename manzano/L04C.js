// Manzano - L04C: Números divisíveis por 4 menores que 200 (repita)

var i = 1;
do {
  if (i % 4 == 0) {
    console.log(i);
  }
  i = i + 1;
} while (i < 200);
