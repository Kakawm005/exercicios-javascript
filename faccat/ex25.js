// Faccat - Exercício 25: Saldo atual de conta bancária

var conta = prompt("Número da conta:");
var saldo = Number(prompt("Saldo:"));
var debito = Number(prompt("Débito:"));
var credito = Number(prompt("Crédito:"));
var saldoAtual = saldo - debito + credito;
console.log("Conta " + conta + " - saldo atual: R$ " + saldoAtual);
if (saldoAtual >= 0) {
  console.log("Saldo POSITIVO");
} else {
  console.log("Saldo NEGATIVO");
}
