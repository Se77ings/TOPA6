let valor1, valor2, op, respostaCorreta;

function generateEquation() {
  valor1 = Math.floor(Math.random() * 10) + 1;
  valor2 = Math.floor(Math.random() * 10) + 1;
  const operadores = ['+', '-', '*', '/'];
  op = operadores[Math.floor(Math.random() * operadores.length)];

  if (op === '+') {
    respostaCorreta = valor1 + valor2;
  } else if (op === '-') {
    respostaCorreta = valor1 - valor2;
  } else if (op === '*') {
    respostaCorreta = valor1 * valor2;
  } else if (op === '/') {
    respostaCorreta = Math.floor(valor1 / valor2); // Apenas valor inteiro
  }

  document.getElementById('equacao').textContent = `${valor1} ${op} ${valor2} = `;
  document.getElementById('respostaUsuario').value = ''; // Limpa o campo de resposta
}

function checkAnswer() {
  const respostaUsuario = parseInt(document.getElementById('respostaUsuario').value);

  if (respostaUsuario === respostaCorreta) {
    navigator.vibrate(2000); // Vibração por 2 segundos em caso de acerto
    alert('Correto!');
    generateEquation(); // Gera nova equação
  } else {
    navigator.vibrate(1000); // Vibração por 1 segundo em caso de erro
    alert('Errado! Tente novamente.');
  }
}
