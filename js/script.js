function calcularPlanos() {
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    
    const imc = peso / ((altura / 100) ** 2);
    
    const unimed = {
    basic: 100 + (idade * 10 * (imc / 10)),
    standard: (150 + (idade * 15)) * (imc / 10),
    premium: (200 - (imc * 10) + (idade * 20)) * (imc / 10)
    };
    
    let fatorComorbidade = 1;
    
    if (imc < 18.5) fatorComorbidade = 10;
    else if (imc >= 18.5 && imc < 24.9) fatorComorbidade = 1;
    else if (imc >= 25 && imc < 29.9) fatorComorbidade = 6;
    else if (imc >= 30 && imc < 34.9) fatorComorbidade = 10;
    else if (imc >= 35 && imc < 39.9) fatorComorbidade = 20;
    else if (imc >= 40) fatorComorbidade = 30;
    
    
    const hapvida = {
    basic: 100 + (fatorComorbidade * 10 * (imc / 10)),
    standard: (150 + (fatorComorbidade * 15)) * (imc / 10),
    premium: (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10)
    };
    if (altura > 0 && peso > 0 && idade > 0) {
    
    const resultTable = document.getElementById('tabelaResultado');
    resultTable.innerHTML = `
    <div class="tipos-planos">
        <div class="basic">
            <div class="title">Plano Básico</div>
            <div class="description">
                <p><b>Unimed:</b> R$ ${unimed.basic.toFixed(2)}</p>
                <p><b>Hapvida:</b> R$ ${hapvida.basic.toFixed(2)}</p>
                <button id="contratar" class="btn btn-danger">Contratar Plano</button>
            </div>
        </div>
        <div class="standart">
            <div class="title">Plano Standart</div>
            <div class="description">
                <p><b>Unimed:</b> R$ ${unimed.standard.toFixed(2)}</p>
                <p><b>Hapvida:</b> R$ ${hapvida.standard.toFixed(2)}</p>
                <button id="contratar" class="btn btn-danger">Contratar Plano</button>
            </div>
        </div>
        <div class="premium">
            <div class="title">Plano Premium</div>
            <div class="description">
                <p><b>Unimed:</b> R$ ${unimed.premium.toFixed(2)}</p>
                <p><b>Hapvida:</b> R$ ${hapvida.premium.toFixed(2)}</p>
                <button id="contratar" class="btn btn-danger">Contratar Plano</button>
            </div>
        </div>
    </div>
    `;
    } else {
    alert('Insira valores válidos.');
    }
    
}