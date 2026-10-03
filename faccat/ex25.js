/**
 * Faccat - Exercício 25: Saldo atual de conta bancária
 */
const { lerNumero, lerTexto, escrever, executar } = require('../util');

executar(async () => {
  const conta = await lerTexto('Número da conta:');
  const saldo = await lerNumero('Saldo:');
  const debito = await lerNumero('Débito:');
  const credito = await lerNumero('Crédito:');
  const atual = saldo - debito + credito;
  escrever(`Conta ${conta} - saldo atual: R$ ${atual.toFixed(2)} (${atual >= 0 ? 'POSITIVO' : 'NEGATIVO'})`);
});
