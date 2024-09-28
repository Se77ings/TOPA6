getItems(3);

// Adiciona um evento de rolagem para detectar quando o usuário atinge o final da página
window.addEventListener('scrollend', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    getItems(3); 
  }
});

function getItems(count) {
  for (let i = 0; i < count; i++) {
    let id = Math.floor(Math.random() * 50) + 1;

    fetch("https://jsonplaceholder.typicode.com/albums/1/photos?id=" + id)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          document.getElementById("resultado").innerHTML += `
            <div class="col-md-4">
              <div class="card mb-4">
                <img src='${item.thumbnailUrl}' class="card-img-top" alt="Imagem ${item.id}">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                </div>
              </div>
            </div>`;
        });
      })
      .catch((error) => {
        document.getElementById("resultado").innerHTML = "Erro ao conectar à API.";
      });
  }
}