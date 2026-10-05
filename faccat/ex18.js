// Faccat - Exercício 18: Pode votar este ano? (a partir de 16 anos)

var anoAtual = Number(prompt("Ano atual:"));
var anoNascimento = Number(prompt("Ano de nascimento:"));
var idade = anoAtual - anoNascimento;
if (idade >= 16) {
  console.log("Com " + idade + " anos, a pessoa PODE votar este ano");
} else {
  console.log("Com " + idade + " anos, a pessoa NÃO pode votar este ano");
}
