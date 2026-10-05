// Faccat - Exercício 42: Idade, tempo de trabalho e aposentadoria

// regra que usei: idade >= 65, ou tempo de trabalho >= 30,
// ou (idade >= 60 e tempo de trabalho >= 25)
var codigo = prompt("Código do empregado:");
var anoAtual = Number(prompt("Ano atual:"));
var nascimento = Number(prompt("Ano de nascimento:"));
var ingresso = Number(prompt("Ano de ingresso na empresa:"));
var idade = anoAtual - nascimento;
var tempo = anoAtual - ingresso;

console.log("Empregado " + codigo + ": " + idade + " anos de idade e " + tempo + " anos de empresa");
if (idade >= 65 || tempo >= 30 || (idade >= 60 && tempo >= 25)) {
  console.log("REQUER aposentadoria");
} else {
  console.log("NÃO requer aposentadoria");
}
