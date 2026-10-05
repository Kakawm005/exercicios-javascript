// Faccat - Exercício 41: Média de aproveitamento e conceito

// conceitos que usei: A >= 9 | B >= 7,5 | C >= 6 | D >= 4 | E abaixo de 4
var n1 = Number(prompt("Nota 1:"));
var n2 = Number(prompt("Nota 2:"));
var n3 = Number(prompt("Nota 3:"));
var exercicios = Number(prompt("Média dos exercícios:"));
var media = (n1 + n2 * 2 + n3 * 3 + exercicios) / 7;
var conceito;

if (media >= 9) {
  conceito = "A";
} else if (media >= 7.5) {
  conceito = "B";
} else if (media >= 6) {
  conceito = "C";
} else if (media >= 4) {
  conceito = "D";
} else {
  conceito = "E";
}
console.log("Média de aproveitamento: " + media);
console.log("Conceito: " + conceito);
