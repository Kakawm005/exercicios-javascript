/**
 * Manzano - L04H: Área total de uma residência (repita)
 */
const { lerNumero, lerTexto, escrever, executar } = require('../util');

executar(async () => {
  let total = 0;
  let continuar;
  do {
    const nome = await lerTexto('Nome do cômodo:');
    const largura = await lerNumero('Largura (m):');
    const comprimento = await lerNumero('Comprimento (m):');
    const area = largura * comprimento;
    total += area;
    escrever(`Área de ${nome}: ${area} m²`);
    continuar = (await lerTexto('Deseja continuar calculando cômodos? (SIM/NAO)')).toUpperCase();
  } while (continuar !== 'NAO');
  escrever(`Área total da residência: ${total} m²`);
});
