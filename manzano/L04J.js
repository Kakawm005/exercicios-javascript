// Manzano - L04J: Divisão inteira por subtrações sucessivas (sem usar DIV)

var dividendo = Number(prompt("Digite o dividendo:"));
var divisor = Number(prompt("Digite o divisor (maior que zero):"));
if (divisor > 0 && dividendo >= 0) {
  var resto = dividendo;
  var quociente = 0;
  while (resto >= divisor) {
    resto = resto - divisor;
    quociente = quociente + 1;
  }
  console.log("Quociente: " + quociente);
  console.log("Resto: " + resto);
} else {
  console.log("Use dividendo maior ou igual a 0 e divisor maior que 0");
}
