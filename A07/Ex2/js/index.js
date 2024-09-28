
document.getElementById('botao').addEventListener('click', function() {
  navigator.notification.prompt(
      'Digite um dos seguintes temas: primary, secondary, success, info, warning, danger, light, dark',
      function(results) {
          if (results.buttonIndex === 1) { // Se o usuário confirmar
              const tema = results.input1.trim().toLowerCase();
              const temasArray = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
              const body = document.getElementById('themeBody');

              if (temasArray.includes(tema)) {
                  // Remove todas as classes de tema previamente aplicadas
                  temasArray.forEach(t => body.classList.remove(`bg-${t}`));

                  // Aplica o novo tema
                  body.classList.add(`bg-${tema}`);
                  
                  // Ajusta o texto para manter contraste em temas claros ou escuros
                  if (tema === 'light' || tema === 'warning') {
                      body.classList.remove('text-light');
                      body.classList.add('text-dark');
                  } else {
                      body.classList.remove('text-dark');
                      body.classList.add('text-light');
                  }
              } else {
                  alert('Tema inválido! Por favor, escolha um tema válido.');
              }
          }
      },
      'Escolha o tema',           // Título
      ['OK', 'Cancelar'],         // Botões
      ''                          // Texto padrão
  );
});
