function carregou() {
  var campoSaida = document.getElementById("saida");
  campoSaida.innerHTML = "Carregou!";

  document.addEventListener("deviceready", dispositivoPronto, true);
  document.addEventListener("pause", dispositivoPausado, true);
  document.addEventListener("resume", dispositivoPronto, true);
}

function dispositivoPronto() {
  var campoSaida = document.getElementById("saida");
  campoSaida.innerHTML = "Dispositivo pronto!";
}

function dispositivoPausado() {
  var campoSaida = document.getElementById("saida");
  campoSaida.innerHTML = "Dispositivo pausado!";
}

function dispositivoRetomado() {
  var campoSaida = document.getElementById("saida");
  campoSaida.innerHTML = "Dispositivo retomado!";
}
