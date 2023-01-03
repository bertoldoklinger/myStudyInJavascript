function mostrarAreaAlert() {
  let base = prompt("Digite a base");
  base = parseFloat(base);
  let altura = prompt("Digite a altura");
  altura = parseFloat(altura);
  let area = calcularArea(base, altura);
  alert("A areá é: " + area);
}

function mostrarAreaOutput() {
  let base = prompt("Digite a base");
  base = parseFloat(base);
  let altura = prompt("Digite a altura");
  altura = parseFloat(altura);
  let area = calcularArea(base, altura);
  document.querySelector("#output").innerHTML = "A área total é: " + area;
}

function calcularArea(b, a) {
  return b * a;
}
