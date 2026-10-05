// Faccat - Exercício 10: Custo final de um carro ao consumidor

var custoFabrica = Number(prompt("Custo de fábrica:"));
var distribuidor = custoFabrica * 28 / 100;
var impostos = custoFabrica * 45 / 100;
var custoFinal = custoFabrica + distribuidor + impostos;
console.log("Custo final ao consumidor: R$ " + custoFinal);
