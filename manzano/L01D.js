// Manzano - L01D: Litros de combustível gastos em uma viagem (12 km por litro)

var tempo = Number(prompt("Tempo gasto na viagem (horas):"));
var velocidade = Number(prompt("Velocidade média (km/h):"));
var distancia = tempo * velocidade;
var litrosUsados = distancia / 12;
console.log("Velocidade média: " + velocidade + " km/h");
console.log("Tempo gasto: " + tempo + " h");
console.log("Distância percorrida: " + distancia + " km");
console.log("Litros usados: " + litrosUsados);
