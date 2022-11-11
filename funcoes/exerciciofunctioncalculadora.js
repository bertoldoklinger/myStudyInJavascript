let output = document.querySelector("#output");
let mensagem = "";
let numero = prompt("Digite um número");
numero = parseInt(numero);
output.innerHTML = numero;

function escreve(){
  let output = document.querySelector("#output");
  output.innerHTML = numero;
}

function somar() {
  let outronumero = prompt("Digite outro número");
  outronumero = parseFloat(outronumero);
  numero += outronumero;
  escreve();
}

function subtrair() {
  let outronumero = prompt("Digite outro número");
  outronumero = parseFloat(outronumero);
  numero -= outronumero;
  escreve();
}

function multiplicar() {
  let outronumero = prompt("Digite outro número");
  outronumero = parseFloat(outronumero);
  numero *= outronumero;
  escreve();
}

function dividir() {
  let outronumero = prompt("Digite outro número");
  outronumero = parseFloat(outronumero);
  numero /= outronumero;
  escreve();
}



