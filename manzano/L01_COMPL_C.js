// Manzano - L01_COMPL_C: Apuração de eleição sindical (candidatos A, B e C)

var a = Number(prompt("Votos válidos do candidato A:"));
var b = Number(prompt("Votos válidos do candidato B:"));
var c = Number(prompt("Votos válidos do candidato C:"));
var nulos = Number(prompt("Votos nulos:"));
var brancos = Number(prompt("Votos em branco:"));

var validos = a + b + c;
var total = validos + nulos + brancos;

if (total > 0) {
  console.log("Total de eleitores: " + total);
  console.log("Votos válidos: " + validos / total * 100 + "%");
  console.log("Candidato A: " + a / total * 100 + "%");
  console.log("Candidato B: " + b / total * 100 + "%");
  console.log("Candidato C: " + c / total * 100 + "%");
  console.log("Votos nulos: " + nulos / total * 100 + "%");
  console.log("Votos em branco: " + brancos / total * 100 + "%");
} else {
  console.log("Nenhum voto foi informado");
}
