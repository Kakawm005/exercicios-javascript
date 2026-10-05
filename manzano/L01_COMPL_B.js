// Manzano - L01_COMPL_B: Novo salário com percentual de reajuste

var sm = Number(prompt("Salário mensal (SM):"));
var pr = Number(prompt("Percentual de reajuste (PR):"));
var ns = sm + sm * pr / 100;
console.log("Novo salário (NS): R$ " + ns);
