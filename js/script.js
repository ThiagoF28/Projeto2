function somar(){
    var idade = parseInt(document.getElementById('idade').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    
    var unimed = calUnimed(idade, peso, altura);
    var hapvida = calHapvida(idade, peso, altura);


    var resultadoHTML = "<h2>Resultados:</h2>";
    resultadoHTML += "<table><tr><th></th><th>Básico</th><th>Standard</th><th>Premium</th></tr>";
    resultadoHTML += "<tr><td>unimed</td><td>" + precocalunimed.basico + "</td><td>" + precounimed.standard + "</td><td>" + precounimed.premium + "</td></tr>";
    resultadoHTML += "<tr><td>hapvida</td><td>" + precohapvida.basico + "</td><td>" + precohapvida.standard + "</td><td>" + precoOhapvida.premium + "</td></tr>";
    resultadoHTML += "</table>";

    document.getElementById('resultado').innerHTML = resultado;
}

function calUnimed(idade, peso, altura){
    var imc = peso / (altura * altura);
    return{
        basico: 100 + (idade * 10 * (imc / 10)),
        standard: (150 + (idade * 15)) * (imc / 10),
        premium: (200 - (imc * 10) + (idade * 20)) * (imc / 10),
    };
}

function calHapvida(idade, peso, altura){
    var imc = peso / (altura * altura);
    var calculComorbidade = calculComorbidade(imc);
    return {
        basico: 100 + (calculComorbidade * 10 * (imc / 10)),
        standard: (150 + (calculComorbidade * 15)) * (imc / 10),
        premium: (200 - (imc * 10) + (calculComorbidade * 20)) * (imc / 10),
    };
}

function calculComorbidade(imc){
    if (imc < 18.5){
        return 10;
    } else if (imc < 24.9){
        return 1;
    } else if (imc < 29.9) {
        return 6;
    } else if(imc < 34.9){
        return 10;
    } else if(imc < 39.9){
        return 20;
    } else if (imc < 40.0){
        return 30;
    }
}