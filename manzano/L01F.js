// Manzano - L01F: Troca dos valores de A e B

var a = prompt("Digite o valor de A:");
var b = prompt("Digite o valor de B:");
var auxiliar = a;
a = b;
b = auxiliar;
console.log("Depois da troca: A = " + a + " e B = " + b);
