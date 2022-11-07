//COM OPERADOR LÓGICO E(&&)

let nota1 = prompt("Digite a primeira nota");
nota1 = parseInt(nota1);
let nota2 = prompt("Digite a segunda nota");
nota2 = parseInt(nota2);
if ((nota1 + nota2) / 2 > 5 && nota1 > 0 && nota2 > 0) {
  alert("Parabéns você foi aprovado!");
} else {
  alert("Desculpe,você foi reprovado!");
}

//COM OPERADOR LÓGICO OU(||)

let n1 = prompt("Digite a primeira nota");
n1 = parseInt(n1);
let n2 = prompt("Digite a segunda nota");
n2 = parseInt(n2);
let media = (n1 + n2) / 2;
if (n1 === 0 || n2 === 0 || media < 5) {
  alert("Desculpe,você foi reprovado!");
} else {
  alert("Parabéns,você foi aprovado!");
}
