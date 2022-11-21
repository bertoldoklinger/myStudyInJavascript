let output = document.querySelector("#output");
let mensagem = "";
let numero = prompt("Digite um número");
numero = parseFloat(numero);
output.innerHTML = numero;

function escreve(){
  let output = document.querySelector("#output");
  output.innerHTML = numero;
}

function calcular(simbolo) {
    let n2 = prompt("Digite outro número");
    n2 = parseFloat(n2);
    switch(simbolo){
      case '+':
        numero+=n2;
        break;
      case '-':
        numero-=n2;
        break;
      case '*':
        numero*=n2;
        break;
      case '/':
        numero/=n2;
        break;
    }
    escreve(); 
}
