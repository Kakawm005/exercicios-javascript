// Manzano - L01K: Conversão de real para dólar

var cotacao = Number(prompt("Cotação do dólar (em reais):"));
var reais = Number(prompt("Quantidade de reais:"));
var dolares = reais / cotacao;
console.log("R$ " + reais + " = US$ " + dolares);
