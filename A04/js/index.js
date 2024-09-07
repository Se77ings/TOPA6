document.getElementById('calcularBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que a página seja recarregada
    var API_URL = "https://38b25555-2ea7-46bf-8833-16c75d90d956-00-8chx585mk50d.riker.replit.dev/"
    // Obter os valores de peso e altura
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    // Validar os dados
    if (peso === '' || altura === '') {
        document.getElementById('resultado').innerHTML = 'Por favor, preencha todos os campos.';
        return;
    }

    // Preparar os dados para envio como JSON
    const dados = {
        peso: parseFloat(peso),
        altura: parseFloat(altura)
    };


    // Fazer a requisição POST para a API
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados) // Enviar os dados no corpo da requisição como JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }
        return response.json();
    })
    .then(data => {
        // Exibir o resultado na página
        const resultadoDiv = document.getElementById('resultado');
        if (data.erro) {
            resultadoDiv.innerHTML = data.erro;
        } else {
            resultadoDiv.innerHTML = `
                <p><strong>IMC:</strong> ${data.IMC}</p>
                <p><strong>Classificação:</strong> ${data.classificacao}</p>
                <p><strong>Peso Ideal:</strong> ${data.pesoIdeal} kg</p>
                <p><strong>Você precisa ${data.diferencaPeso.acao}:</strong> ${data.diferencaPeso.valor} kg</p>
            `;
        }
    })
    .catch(error => {
        document.getElementById('resultado').innerHTML = 'Erro ao conectar à API.';
    });
});
