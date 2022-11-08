/*
Exercicio 1: 
Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.
Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos:
caso maçã, retorne no console:
“Não vendemos esta fruta aqui”. Caso kiwi, 
retorne: “Estamos com escassez de kiwis” e caso melancia, 
retorne: “Aqui está, são 3 reais o quilo”. 
Teste com estas três opções e verifique o console do seu navegador.
Crie também um default, que retornará uma mensagem de erro no console.
*/

let fruta = prompt("Escolha o nome de uma fruta");
switch (fruta) {
  case "Maçã":
    alert("Não vendemos essa fruta aqui!");
    break;
  case "Kiwi":
    alert("Estamos com escassez de kiwis");
    break;
  case "Melancia":
    alert("Aqui está,são 3 reais o quilo");
    break;
  default:
    alert("Erro!Escolha Maçã,Kiwi ou Melancia!");
}

/* 
Exercício 2:
Um homem decidiu ir à uma revenda comprar um carro. 
Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans,
motocicletas e caminhonetes. Utilizando uma estrutura switch/case, caso o comprador queira o hatch,
retorne: “Compra efetuada com sucesso”. Nas outras opções,
retorne: “Tem certeza que não prefere este modelo?”. 
Caso seja especificado um modelo que não está disponível, 
retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.
*/
let carro = prompt("Qual tipo de veiculo você quer comprar?");
switch (carro) {
  case "sedan":
    alert("Tem certeza que não prefere este modelo?");
    break;
  case "motocicleta":
    alert("Tem certeza que não prefere este modelo?");
    break;
  case "caminhonete":
    alert("Tem certeza que não prefere este modelo?");
    break;
  case "hatch":
    alert("Compra efetuada com sucesso!");
    break;
  default:
    alert("Não trabalhamos com este tipo de automóvel aqui!");
}
 