// Manzano - L03L: Maior e menor valor até um negativo ser informado (enquanto)

var n = Number(prompt("Digite um valor positivo (negativo para parar):"));
var maior = 0;
var menor = 0;
var cont = 0;
while (n >= 0) {
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
  n = Number(prompt("Digite um valor positivo (negativo para parar):"));
}
if (cont == 0) {
  console.log("Nenhum valor válido foi informado");
} else {
  console.log("Maior: " + maior);
  console.log("Menor: " + menor);
}
