//Criação da função da calculadora
function calculadoraIMC() {

//Criação e atribuição das váriaveis
let pesoInserido = document.getElementById("peso").value;
let alturaInserida = document.getElementById("altura").value;

//conversão dos textos em números decimais
let valorPeso = parseFloat(pesoInserido.replace(',', '.'));
let valorAltura = parseFloat(alturaInserida.replace(',', '.'));


//Validação para evitar divisões por zero
if (isNaN(valorPeso) || isNaN(valorAltura) || valorAltura === 0) {
    document.getElementById("resultado").textContent = "Por favor, insira números válidos!";
    return;
}
//Processamento e calculo dos dados
let valorIMC = valorPeso / (valorAltura*valorAltura);

//Saída do resultado do IMC
document.getElementById("resultado").textContent = "O seu valor de IMC é : " + valorIMC.toFixed(2);

//exibição da classificação do IMC
const classificacao = ["Abaixo do peso", "Normal", "Sobrepreso", "Obesidade"];
let resultadoClassificacao;

if (valorIMC < 18.5) {
    resultadoClassificacao = classificacao[0];
} else if (valorIMC >= 18.5 && valorIMC <25) {
    resultadoClassificacao = classificacao[1];
} else if (valorIMC >= 25 && valorIMC <30) {
    resultadoClassificacao = classificacao[2];
} else if (valorIMC >30) {
    resultadoClassificacao = classificacao[3];
}

document.getElementById("classificacaoimc").textContent = "Sua classificação é : " + resultadoClassificacao;
}