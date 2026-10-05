// Manzano - L04I: Maior e menor valor até um negativo ser informado (repita)

var maior = 0;
var menor = 0;
var cont = 0;
var n;
do {
  n = Number(prompt("Digite um valor positivo (negativo para parar):"));
  if (n >= 0) {
    if (cont == 0) {
      maior = n;
      menor = n;
    }
    if (n > maior) {
      maior = n;
    }
    if (n < menor) {
      menor = n;
    }
    cont = cont + 1;
  }
} while (n >= 0);

if (cont == 0) {
  console.log("Nenhum valor válido foi informado");
} else {
  console.log("Maior: " + maior);
  console.log("Menor: " + menor);
}
