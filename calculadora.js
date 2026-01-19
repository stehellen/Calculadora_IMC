function CalcularIMC() {

    //Entrada de dados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    
    //Processamento
    let imc = peso / (altura * altura);
    let classificacaoImc = "";

    if (imc < 18.5) {
        classificacaoImc = "e você está abaixo do peso";
    } else if (imc < 25) {
        classificacaoImc = " e seu peso está normal";
    } else if (imc < 30) {
        classificacaoImc = " e você está com sobrepeso";
    } else {
        classificacaoImc = " e você está obeso";
    }

    //Saída
    document.getElementById("valorImc").textContent = "Seu IMC é: " + imc.toFixed(2);
    document.getElementById("classificacaoImc").textContent = classificacaoImc;
}