var tudo = document.getElementById("conteudo");
var input = document.querySelector("input");
tudo.dataset.bsTheme = "light";
document.getElementById("chave").checked = false;

if (localStorage.getItem("tema") === "Tema Escuro") {
  tudo.dataset.bsTheme = "dark";
  document.getElementById("chave").checked = true;
}

if (localStorage.getItem("nome")) {
  input.value = localStorage.getItem("nome");
}

var tema = true;

function handleChange(event) {
  console.log(event.target.value);
  localStorage.setItem("nome", event.target.value);
}

window.onload = function () {
  var chave = document.getElementById("chave");
  chave.addEventListener("click", muda);
};

function muda() {
  tema = !tema;
  localStorage.setItem("tema", tema ? "Tema Claro" : "Tema Escuro");
  console.log("Valor armazenado no localstorage: " + localStorage.getItem("tema"));
  var tudo = document.getElementById("conteudo");
  if (tema) {
    tudo.dataset.bsTheme = "light";
  } else {
    tudo.dataset.bsTheme = "dark";
  }
}