let nomejogador1 = prompt("Qual o nome do primeiro jogador?");
let jogador1 = prompt("Digite um número, " + nomejogador1);
let nomejogador2 = prompt("Qual o nome do segundo jogador?");
let jogador2 = prompt("Digite outro número, " + nomejogador2);
if (jogador1 === jogador2) {
  alert("Empate!");
} else {
  let sortedNumber = parseInt(Math.random() * 2);
  alert("O número sorteado foi: " + sortedNumber);
  if (sortedNumber === 0) {
    if(jogador1 < jogador2)
    alert("Ganhou o jogador 1!");
  } else {
    if(jogador1 > jogador2){
      alert("Ganhou o jogador 1!")
    } else {
      alert("Ganhou o jogador 2!");
    }
  }
}


