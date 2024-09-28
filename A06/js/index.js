function onLoad() {
    document.addEventListener('deviceready', getLocation, false);
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Chama a função para buscar a temperatura e umidade
    getWeather(latitude, longitude);
}

function onError(error) {
    document.getElementById('temperature').textContent = 'Error: ' + error.message;
    document.getElementById('humidity').textContent = 'Unable to fetch humidity.';
}

function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`;
    console.log(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`)

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.current.temperature_2m;
            const humidity = data.current.relative_humidity_2m;

            document.getElementById('temperature').textContent = `Temperatura: ${temperature}°C`;
            document.getElementById('humidity').textContent = `Umidade: ${humidity}%`;
        })
        .catch(error => {
            document.getElementById('temperature').textContent = 'Error fetching temperature';
            document.getElementById('humidity').textContent = 'Error fetching humidity';
        });
}
