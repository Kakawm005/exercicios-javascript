// Manzano - L02E: Equação do segundo grau

var a = Number(prompt("Digite A:"));
var b = Number(prompt("Digite B:"));
var c = Number(prompt("Digite C:"));

if (a == 0) {
  console.log("A precisa ser diferente de zero");
} else {
  var delta = b * b - 4 * a * c;
  if (delta < 0) {
    console.log("Não existem raízes reais (delta negativo)");
  } else {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Delta = " + delta);
    console.log("X1 = " + x1);
    console.log("X2 = " + x2);
  }
}
