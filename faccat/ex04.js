// Faccat - Exercício 4: Reescrever com o mínimo de parênteses

// em cada linha: expressão com o mínimo de parênteses, resultado original e resultado novo
var o, r;

o = 6*(3+2);
r = 6*(3+2);
console.log("A) 6*(3+2)  -> " + o + " e " + r);

o = 2+(6*(3+2));
r = 2+6*(3+2);
console.log("B) 2+6*(3+2)  -> " + o + " e " + r);

o = 2+(3*6)/(2+4);
r = 2+3*6/(2+4);
console.log("C) 2+3*6/(2+4)  -> " + o + " e " + r);

o = 2*(8/(3+1));
r = 2*8/(3+1);
console.log("D) 2*8/(3+1)  -> " + o + " e " + r);

o = 3+(16-2)/(2*(9-2));
r = 3+(16-2)/(2*(9-2));
console.log("E) 3+(16-2)/(2*(9-2))  -> " + o + " e " + r);

o = (6/3)+(8/2);
r = 6/3+8/2;
console.log("F) 6/3+8/2  -> " + o + " e " + r);

o = ((3+(8/2))*4)+(3*2);
r = (3+8/2)*4+3*2;
console.log("G) (3+8/2)*4+3*2  -> " + o + " e " + r);

o = (6*(3*3)+6)-10;
r = 6*3*3+6-10;
console.log("H) 6*3*3+6-10  -> " + o + " e " + r);

o = (((10*8)+3)*9);
r = (10*8+3)*9;
console.log("I) (10*8+3)*9  -> " + o + " e " + r);

o = ((-12)*(-4))+(3*(-4));
r = -12*(-4)+3*(-4);
console.log("J) -12*(-4)+3*(-4)  -> " + o + " e " + r);
