// Manzano - L01J: Conversão de dólar para real

var cotacao = Number(prompt("Cotação do dólar (em reais):"));
var dolares = Number(prompt("Quantidade de dólares:"));
var reais = dolares * cotacao;
console.log("US$ " + dolares + " = R$ " + reais);
