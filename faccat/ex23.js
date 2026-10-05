// Faccat - Exercício 23: Peso ideal (masculino: 72,7*h - 58; feminino: 62,1*h - 44,7)

// obs: o algoritmo com erros da apostila não está no PDF
var nome = prompt("Nome:");
var altura = Number(prompt("Altura (em metros):"));
var sexo = prompt("Sexo (M ou F):");
if (sexo == "M" || sexo == "m") {
  var peso = 72.7 * altura - 58;
  console.log(nome + ", seu peso ideal é " + peso + " kg");
} else if (sexo == "F" || sexo == "f") {
  var peso = 62.1 * altura - 44.7;
  console.log(nome + ", seu peso ideal é " + peso + " kg");
} else {
  console.log("Sexo inválido");
}
