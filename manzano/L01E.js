// Manzano - L01E: Valor de uma prestação em atraso

var valor = Number(prompt("Valor da prestação:"));
var taxa = Number(prompt("Taxa de juros (%):"));
var tempo = Number(prompt("Tempo de atraso:"));
var prestacao = valor + (valor * taxa / 100) * tempo;
console.log("Valor da prestação em atraso: R$ " + prestacao);
