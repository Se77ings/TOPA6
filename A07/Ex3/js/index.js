      document.addEventListener("deviceready", function() {
        const alvo = document.getElementById("alvo");
        const pontuacaoElem = document.getElementById("pontuacao");
        let pontuacao = 0;

        // Função para mover o alvo aleatoriamente pela tela
        function moverAlvo() {
          const larguraTela = window.innerWidth - 50; // Subtrai o tamanho do alvo
          const alturaTela = window.innerHeight - 50;
          const posX = Math.random() * larguraTela;
          const posY = Math.random() * alturaTela;
          alvo.style.left = `${posX}px`;
          alvo.style.top = `${posY}px`;
        }

        // Função para tocar o som de acerto
        function somAcerto() {
          navigator.notification.beep(1); // Toca 1 bipe para acerto
        }

        // Função para tocar o som de erro
        function somErro() {
          navigator.notification.beep(2); // Toca 2 bipes para erro
        }

        // Clique no alvo (acerto)
        alvo.addEventListener("click", function(event) {
          event.stopPropagation(); // Evita que o clique na tela seja considerado erro
          pontuacao++;
          pontuacaoElem.textContent = `Pontuação: ${pontuacao}`;
          somAcerto();
          moverAlvo(); // Mover o alvo após acerto
        });

        // Clique fora do alvo (erro)
        document.body.addEventListener("click", function() {
          somErro();
        });

        // Inicia o jogo movendo o alvo
        moverAlvo();
      });
