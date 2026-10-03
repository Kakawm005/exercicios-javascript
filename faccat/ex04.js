/**
 * Faccat - Exercício 4: Reescrever com o mínimo de parênteses (verifica se o resultado se mantém)
 */
const { escrever, executar } = require('../util');

executar(async () => {
  const itens = [
    ['A', '6*(3+2)', '6*(3+2)'],
    ['B', '2+(6*(3+2))', '2+6*(3+2)'],
    ['C', '2+(3*6)/(2+4)', '2+3*6/(2+4)'],
    ['D', '2*(8/(3+1))', '2*8/(3+1)'],
    ['E', '3+(16-2)/(2*(9-2))', '3+(16-2)/(2*(9-2))'],
    ['F', '(6/3)+(8/2)', '6/3+8/2'],
    ['G', '((3+(8/2))*4)+(3*2)', '(3+8/2)*4+3*2'],
    ['H', '(6*(3*3)+6)-10', '6*3*3+6-10'],
    ['I', '(((10*8)+3)*9)', '(10*8+3)*9'],
    ['J', '((-12)*(-4))+(3*(-4))', '-12*(-4)+3*(-4)'],
  ];
  const avaliar = (expr) => Function(`return ${expr}`)();
  for (const [letra, original, reduzida] of itens) {
    const r1 = avaliar(original);
    const r2 = avaliar(reduzida);
    escrever(`${letra}) ${original}  =>  ${reduzida}   (${r1} ${r1 === r2 ? '=' : '!='} ${r2})`);
  }
});
