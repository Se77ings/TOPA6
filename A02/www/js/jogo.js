window.onload = function() {
    document.addEventListener('deviceready', inicio, false);
}

var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
function inicio() {
    var btnAdd = document.getElementById('btnAdd');
    btnAdd.addEventListener('click', apertou);
    
    var btnGuess = document.getElementById('btnGuess');
    btnGuess.addEventListener('click', adivinhar);

}

function apertou() {
    var numero = document.getElementById('numero').value;
    if(numero != ''){
        div1.style.display = 'none';
        div2.style.display = 'block';
    }else{
        alert('Digite um número!');
    }
}

function adivinhar(){
   
    var numero = document.getElementById('numero').value;
    var campoSaida = document.getElementById('saida2');
    var adivinhe = document.getElementById('adivinhe').value;

    if(numero == adivinhe) {
        campoSaida.innerHTML = 'Acertou!';
        document.getElementById('numero').value = '';
        setTimeout(()=>{
            document.getElementById('adivinhe').value = '';
            div1.style.display = 'block'; 
            div2.style.display = 'none';
        },2000)
    } else {
        if(numero > adivinhe) {
            campoSaida.innerHTML = 'Digite um número maior!';
        } else {
            campoSaida.innerHTML = 'Digite um número menor!';
        }
    }
}