// Manzano - L03G: Série de Fibonacci até o 15º termo (enquanto)

var anterior = 1;
var atual = 1;
var termo = 1;
var serie = "";
while (termo <= 15) {
  serie = serie + anterior + " ";
  var proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
  termo = termo + 1;
}
console.log(serie);
