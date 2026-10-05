// Faccat - Exercício 21: Duração de um jogo de xadrez em horas inteiras

var inicio = Number(prompt("Hora de início (0 a 23):"));
var fim = Number(prompt("Hora de fim (0 a 23):"));
var duracao;
if (fim >= inicio) {
  duracao = fim - inicio;
} else {
  // o jogo terminou no dia seguinte
  duracao = 24 - inicio + fim;
}
console.log("Duração do jogo: " + duracao + " hora(s)");
