/**
 * Faccat - Exercício 37: Fruteira: morangos e maçãs com desconto de 10%
 */
const { lerNumero, escrever, executar } = require('../util');

executar(async () => {
  // Preços/regras adotados (não constam no PDF):
  //   Morango: R$ 2,50/kg até 5 kg; R$ 2,20/kg acima de 5 kg
  //   Maçã:    R$ 1,80/kg até 5 kg; R$ 1,50/kg acima de 5 kg
  //   Desconto de 10% se o total passar de 8 kg ou de R$ 25,00
  const kgMorango = await lerNumero('Quilos de morango:');
  const kgMaca = await lerNumero('Quilos de maçã:');
  const precoMorango = kgMorango <= 5 ? 2.5 : 2.2;
  const precoMaca = kgMaca <= 5 ? 1.8 : 1.5;
  let total = kgMorango * precoMorango + kgMaca * precoMaca;
  if (kgMorango + kgMaca > 8 || total > 25) {
    total *= 0.9;
    escrever('Desconto de 10% aplicado.');
  }
  escrever(`Valor total: R$ ${total.toFixed(2)}`);
});
