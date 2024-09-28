function tirarFoto() {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA,
  });
}

function onSuccess(imageData) {
  var image = document.getElementById('lugarfoto');
  image.src = "data:image/jpeg;base64," + imageData;
  // Armazena a imagem para envio posterior
  window.imageData = imageData;
}

function onFail(message) {
  alert('Falha ao tirar foto: ' + message);
}

function enviarFoto() {
  if (window.imageData) {
    // Enviar a foto para o servidor PHP
    var formData = new FormData();
    formData.append('image', window.imageData);

    fetch('https://38b25555-2ea7-46bf-8833-16c75d90d956-00-8chx585mk50d.riker.replit.dev/', {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.text())
    .then((data) => {
      alert('Foto enviada com sucesso: ' + data);
    })
    .catch((error) => {
      alert('Erro ao enviar a foto: ' + error.message);
    });
  } else {
    alert('Tire uma foto antes de enviá-la.');
  }
}
