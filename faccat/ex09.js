// Faccat - Exercício 9: Novo salário com reajuste percentual

var salario = Number(prompt("Salário atual:"));
var percentual = Number(prompt("Percentual de reajuste:"));
var novoSalario = salario + salario * percentual / 100;
console.log("Novo salário: R$ " + novoSalario);
