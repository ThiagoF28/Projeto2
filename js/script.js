function calcularPlanos() {
    var idade = parseInt(document.getElementById('idade').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var unimed = calUnimed(idade, peso, altura);
    var hapvida = calHapvida(idade, peso, altura);

    var resultadoHTML = "<h2>Resultados:</h2>";
    resultadoHTML += "<table><tr><th></th><th>Básico</th><th>Standard</th><th>Premium</th></tr>";
    resultadoHTML += "<tr><td>unimed</td><td>" + unimed.basico.toFixed(5) + "</td><td>" + unimed.standard.toFixed(5) + "</td><td>" + unimed.premium.toFixed(5) + "</td></tr>";
    resultadoHTML += "<tr><td>hapvida</td><td>" + hapvida.basico.toFixed(5) + "</td><td>" + hapvida.standard.toFixed(5) + "</td><td>" + hapvida.premium.toFixed(5) + "</td></tr>";
    resultadoHTML += "</table>";

    document.getElementById('resultado').innerHTML = resultadoHTML;
}

function calUnimed(idade, peso, altura) {
    var imc = peso / (altura * altura);
    return {
        basico: 100 + (idade * 10 * (imc / 10)),
        standard: (150 + (idade * 15)) * (imc / 10),
        premium: (200 - (imc * 10) + (idade * 20)) * (imc / 10),
    };
}

function calHapvida(idade, peso, altura) {
    var imc = peso / (altura * altura);
    var calculComorbidade = calcularComorbidade(imc);
    return {
        basico: 100 + (calculComorbidade * 10 * (imc / 10)),
        standard: (150 + (calculComorbidade * 15)) * (imc / 10),
        premium: (200 - (imc * 10) + (calculComorbidade * 20)) * (imc / 10),
    };
}

function calcularComorbidade(imc) {
    if (imc < 18.5) {
        return 10;
    } else if (imc < 24.9) {
        return 1;
    } else if (imc < 29.9) {
        return 6;
    } else if (imc < 34.9) {
        return 10;
    } else if (imc < 39.9) {
        return 20;
    } else if (imc >= 40.0) {
        return 30;
    }
}
