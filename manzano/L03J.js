// Manzano - L03J: Soma e média dos pares de 50 a 70 (enquanto)

var n = 50;
var soma = 0;
var qtd = 0;
while (n <= 70) {
  if (n % 2 == 0) {
    soma = soma + n;
    qtd = qtd + 1;
  }
  n = n + 1;
}
console.log("Soma: " + soma);
console.log("Média: " + soma / qtd);
