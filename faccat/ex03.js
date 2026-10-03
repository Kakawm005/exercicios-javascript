/**
 * Faccat - Exercício 3: Pares de instruções produzem o mesmo resultado?
 */
const { escrever, executar } = require('../util');

executar(async () => {
  const pares = [
    ['A', '(4/2)+(2/4)', '4/2+2/4'],
    ['B', '4/(2+2)/4', '4/2+2/4'],
    ['C', '(4+2)*2-4', '4+2*2-4'],
  ];
  const avaliar = (expr) => Function(`return ${expr}`)();
  for (const [letra, e1, e2] of pares) {
    const r1 = avaliar(e1);
    const r2 = avaliar(e2);
    escrever(`${letra}) ${e1} = ${r1}  |  ${e2} = ${r2}  ->  ${r1 === r2 ? 'MESMO resultado' : 'resultados DIFERENTES'}`);
  }
});
