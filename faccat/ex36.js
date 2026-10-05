// Faccat - Exercício 36: Soma e produto de idades de homens e mulheres

var h1 = Number(prompt("Idade do homem 1:"));
var h2 = Number(prompt("Idade do homem 2:"));
var m1 = Number(prompt("Idade da mulher 1:"));
var m2 = Number(prompt("Idade da mulher 2:"));

var homemVelho = Math.max(h1, h2);
var homemNovo = Math.min(h1, h2);
var mulherVelha = Math.max(m1, m2);
var mulherNova = Math.min(m1, m2);

console.log("Homem mais velho + mulher mais nova: " + (homemVelho + mulherNova));
console.log("Homem mais novo * mulher mais velha: " + (homemNovo * mulherVelha));
