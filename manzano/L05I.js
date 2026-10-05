// Manzano - L05I: Série de Fibonacci até o 15º termo (para)

var anterior = 1;
var atual = 1;
var serie = "";
for (var termo = 1; termo <= 15; termo++) {
  serie = serie + anterior + " ";
  var proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}
console.log(serie);
