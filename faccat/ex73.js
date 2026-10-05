// Faccat - Exercício 73: Pesquisa de salário e número de filhos dos habitantes

var habitantes = 0;
var somaSalarios = 0;
var somaFilhos = 0;
var maiorSalario = 0;
var abaixo150 = 0;
var resposta;

do {
  var salario = Number(prompt("Salário do habitante:"));
  var filhos = Number(prompt("Número de filhos:"));
  habitantes = habitantes + 1;
  somaSalarios = somaSalarios + salario;
  somaFilhos = somaFilhos + filhos;
  if (habitantes == 1 || salario > maiorSalario) {
    maiorSalario = salario;
  }
  if (salario < 150) {
    abaixo150 = abaixo150 + 1;
  }
  resposta = prompt("Tem mais habitantes (S/N)?");
} while (resposta == "S" || resposta == "s");

console.log("Média de salário: R$ " + somaSalarios / habitantes);
console.log("Média de filhos: " + somaFilhos / habitantes);
console.log("Maior salário: R$ " + maiorSalario);
console.log("Pessoas com salário menor que R$ 150,00: " + abaixo150 / habitantes * 100 + "%");
