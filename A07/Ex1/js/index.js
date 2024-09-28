document.addEventListener('deviceready', onDeviceReady, false);
var claro = false;

function onDeviceReady() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', mudaTema);
}

function mudaTema() {
    navigator.notification.alert(
        'Deseja mudar o tema do aplicativo?',
        confirmaMudanca,
        'Mudar Tema',
        ['Sim', 'Não']
    );

    function confirmaMudanca(buttonIndex) {
        if (buttonIndex == 1) {
            navigator.notification.prompt(
                'Digite a senha de acesso:',
                senhaAcesso,
                'Acesso Restrito',
                ['Ok', 'Cancelar']
            );
        }
    }
    
}

function finalizado(buttonIndex) {
    console.log('Claro: ' + claro);
    console.log('Botao: ' + buttonIndex);
}
