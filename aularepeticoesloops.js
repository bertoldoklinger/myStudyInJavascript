//Pedir para o usuário digitar um número e mostrar a tabuada desse número de 1 á 1000.
//Usando while

let numero = prompt("Digite um número");
numero = parseFloat(numero);
let indice = 1;
while (indice <= 1000) {
  document.write(numero + "X" + indice + "=" + numero * indice + "<br>");
  indice = indice + 1;
}
document.write("O loop acabou!");
//Usando for
for (let i = 1; i <= 1000; i++) {
  document.write(numero + "X" + i + "=" + numero * i + "<br>");
}
document.write("Saiu do Loop!");

/*Para esta tarefa reescreva o código da aula anterior,
mas inserindo uma linha divisória sempre que mudar a dezena.
Ou seja, entre o 10 e o 11, entre o 20 e o 21 e assim por diante.
Dica: para escrever uma linha horizontal, use a tag <hr>
*/
//atribuir variavel
let number = prompt("Digite um número para saber a tabuada");
number = parseInt(number);
let i = 0;
//atribuir loop/condição
for (let i = 1; i <= 1000; i++) {
  document.write(number + "X" + i + "=" + number * i + "<br>");
}
if (i % 10 === 0 && i > 0) {
  document.write("<hr>");
}
//incrementação(i++,executado depois do bloco de código acima)
i = i++;
document.write("Saiu do loop");

/*
Para este exercício, mostre na tela todos os anos a partir de 1004 até o ano 2017,
pulando de quatro em quatro anos.
Por exemplo:
1004
1008
1012
E assim por diante.
É como mostrar os anos bissextos, mas sem as regras para descobrir se um ano é bissexto ou não.
 (vamos imaginar que se o ano é múltiplo de quatro, ele é bissexto).
*/
//criando variável
let year = 1004;
year = parseInt(year);
//criando loop/condição
while (year <= 2017) {
  document.write(year);
  year += 4;
}
document.write("Saiu do Loop!");

/*
Para este exercicio aplique a lógica necessário
 para mostrar os anos que são realmente bissextos, respeitando a regra:
 Os anos bissextos são múltiplos de 4, não múltiplos de 100 (1900 não é bissexto) 
 e múltiplos de 400 (2000 é bissexto).
*/
//condições: ano % 4 === 0 && ano % 400 === 0 && ano !== % 100 === 0
let ano = 0;
ano = parseInt(ano);
while (ano <= 2022) {
  if (ano % 400 === 0 || !(ano % 100 === 0)) {
    document.write("<br>" + ano);
  } else {
    document.write("<br>" + ano + " Não é bissexto");
  }
  ano += 4;
}
