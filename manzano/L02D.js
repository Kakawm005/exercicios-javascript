// Manzano - L02D: Média de quatro notas com exame

var n1 = Number(prompt("Nota 1:"));
var n2 = Number(prompt("Nota 2:"));
var n3 = Number(prompt("Nota 3:"));
var n4 = Number(prompt("Nota 4:"));
var media = (n1 + n2 + n3 + n4) / 4;

if (media >= 7) {
  console.log("Aluno APROVADO");
  console.log("Média: " + media);
} else {
  var exame = Number(prompt("Digite a nota do exame:"));
  var novaMedia = (media + exame) / 2;
  if (novaMedia >= 5) {
    console.log("Aluno APROVADO EM EXAME");
  } else {
    console.log("Aluno REPROVADO");
  }
  console.log("Média: " + media);
  console.log("Nova média: " + novaMedia);
}
