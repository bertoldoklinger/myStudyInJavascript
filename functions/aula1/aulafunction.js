//Problema:Pedir para o usuário digitar um numero e mostrar a tabuada desse número
//de 1 a 1000. Deve ter a possibildade do usuário digitar outro número e também limpar
//a tabuada gerada anteriormente
let output = document.querySelector("#output");
let mensagem = '';
function mostrarTabuada() {
  limparTabuada();
  let numero = prompt("Digite o número");
  numero = parseInt(numero);
  let i = 1;
  while (i <= 1000) {
    mensagem+=(numero + "x" + i + "=" + (numero*i) + "<br>");
    i++;
  }
  output.innerHTML = mensagem;
}

function limparTabuada(){
   mensagem = "";
   output.innerHTML = mensagem;
}
