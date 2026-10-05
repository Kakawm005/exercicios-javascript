// Faccat - Exercício 22: Salário com horas extras (50% de acréscimo)

// 40 horas por semana x 4 semanas = 160 horas no mês
var horas = Number(prompt("Horas trabalhadas no mês:"));
var valorHora = Number(prompt("Salário por hora:"));
var salario;
if (horas > 160) {
  var extras = horas - 160;
  salario = 160 * valorHora + extras * valorHora * 1.5;
} else {
  salario = horas * valorHora;
}
console.log("Salário total: R$ " + salario);
