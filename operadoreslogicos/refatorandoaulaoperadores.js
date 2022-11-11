// REFATORANDO CODIGO DA AULA OPERADORES LOGICOS
let jogador1 = prompt("Digite um número");
let jogador2 = prompt("Digite outro número");
if (jogador1 === jogador2) {
  alert("Empate!");
} else {
  let sortedNumber = parseInt(Math.random() * 2);
  alert("O número sorteado foi: " + sortedNumber);
  if (
    (sortedNumber === 0 && jogador1 < jogador2) ||
    (sortedNumber === 1 && jogador1 > jogador2)
  ) {
    alert("Ganhou o jogador 1");
  } else {
    alert("Ganhou o jogador 2");
  }
}
