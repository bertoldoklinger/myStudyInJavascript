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
for(let i=1;i<=1000;i++){
  document.write(numero + "X" + i + "=" + (numero*i) + "<br>");
}
document.write("Saiu do Loop!");


