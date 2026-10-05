// Faccat - Exercício 8: Percentual de votos brancos, nulos e válidos

var total = Number(prompt("Total de eleitores:"));
var brancos = Number(prompt("Votos brancos:"));
var nulos = Number(prompt("Votos nulos:"));
var validos = Number(prompt("Votos válidos:"));

if (total > 0) {
  console.log("Brancos: " + brancos / total * 100 + "%");
  console.log("Nulos: " + nulos / total * 100 + "%");
  console.log("Válidos: " + validos / total * 100 + "%");
} else {
  console.log("O total de eleitores precisa ser maior que zero");
}
