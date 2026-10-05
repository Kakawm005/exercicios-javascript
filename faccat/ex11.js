// Faccat - Exercício 11: Salário final do vendedor de carros usados

var carros = Number(prompt("Número de carros vendidos:"));
var totalVendas = Number(prompt("Valor total das vendas:"));
var fixo = Number(prompt("Salário fixo:"));
var porCarro = Number(prompt("Valor recebido por carro vendido:"));
var salario = fixo + carros * porCarro + totalVendas * 5 / 100;
console.log("Salário final: R$ " + salario);
