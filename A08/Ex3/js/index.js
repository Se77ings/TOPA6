
window.onload = function () {
  getLocation();
};

function getLocation() {
    console.log("Vou buscar os dados");
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

    setLocation(latitude, longitude);
}

function onError(error) {
  document.getElementById("temperature").textContent = "Error: " + error.message;
  document.getElementById("humidity").textContent = "Unable to fetch humidity.";
}

function setLocation(latitude, longitude) {
    document.getElementById("linkMapa").innerHTML = `<a href="https://www.openstreetmap.org/#map=16/${latitude}/${longitude}">Clique aqui para ver o mapa na sua localização</a>`;

}