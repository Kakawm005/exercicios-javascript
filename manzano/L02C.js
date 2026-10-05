// Manzano - L02C: Média de quatro notas (aprovado se média >= 5)

var n1 = Number(prompt("Nota 1:"));
var n2 = Number(prompt("Nota 2:"));
var n3 = Number(prompt("Nota 3:"));
var n4 = Number(prompt("Nota 4:"));
var media = (n1 + n2 + n3 + n4) / 4;
if (media >= 5) {
  console.log("Aluno APROVADO");
} else {
  console.log("Aluno REPROVADO");
}
console.log("Média: " + media);
