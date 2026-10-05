// Manzano - L02L: Saudação conforme o sexo

var nome = prompt("Digite o nome:");
var sexo = prompt("Digite o sexo (M ou F):");
if (sexo == "M" || sexo == "m") {
  console.log("Ilmo Sr. " + nome);
} else if (sexo == "F" || sexo == "f") {
  console.log("Ilma Sra. " + nome);
} else {
  console.log("Sexo inválido");
}
