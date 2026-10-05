// Faccat - Exercício 29: Soma dos 2 maiores entre 3 valores

var a = Number(prompt("Valor 1:"));
var b = Number(prompt("Valor 2:"));
var c = Number(prompt("Valor 3:"));
var menor = Math.min(a, b, c);
var soma = a + b + c - menor;
console.log("Soma dos 2 maiores: " + soma);
