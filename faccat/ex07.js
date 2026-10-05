// Faccat - Exercício 7: Idade em anos, meses e dias convertida para dias

var anos = Number(prompt("Anos:"));
var meses = Number(prompt("Meses:"));
var dias = Number(prompt("Dias:"));
var total = anos * 365 + meses * 30 + dias;
console.log("Idade em dias: " + total);
