// Faccat - Exercício 3: Pares de instruções produzem o mesmo resultado?

var a1 = (4/2)+(2/4);
var a2 = 4/2+2/4;
console.log("A: " + a1 + " e " + a2);
if (a1 == a2) { console.log("A: MESMO resultado"); } else { console.log("A: resultados DIFERENTES"); }

var b1 = 4/(2+2)/4;
var b2 = 4/2+2/4;
console.log("B: " + b1 + " e " + b2);
if (b1 == b2) { console.log("B: MESMO resultado"); } else { console.log("B: resultados DIFERENTES"); }

var c1 = (4+2)*2-4;
var c2 = 4+2*2-4;
console.log("C: " + c1 + " e " + c2);
if (c1 == c2) { console.log("C: MESMO resultado"); } else { console.log("C: resultados DIFERENTES"); }
