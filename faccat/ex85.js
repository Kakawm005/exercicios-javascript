// Faccat - Exercício 85: Temperaturas do ano: menor, maior, média e dias abaixo da média

// são 365 dias; para testar mais rápido, responda S para gerar temperaturas aleatórias
var teste = prompt("Gerar temperaturas aleatórias para teste (S/N)?");
var temps = [];
var soma = 0;

for (var i = 0; i < 365; i++) {
  if (teste == "S" || teste == "s") {
    temps[i] = Math.round(10 + Math.random() * 25);
  } else {
    temps[i] = Number(prompt("Temperatura média do dia " + (i + 1) + ":"));
  }
  soma = soma + temps[i];
}

var media = soma / 365;
var menor = temps[0];
var maior = temps[0];
var abaixo = 0;

for (var i = 0; i < 365; i++) {
  if (temps[i] < menor) {
    menor = temps[i];
  }
  if (temps[i] > maior) {
    maior = temps[i];
  }
  if (temps[i] < media) {
    abaixo = abaixo + 1;
  }
}
console.log("Menor temperatura: " + menor);
console.log("Maior temperatura: " + maior);
console.log("Média anual: " + media);
console.log("Dias abaixo da média: " + abaixo);
