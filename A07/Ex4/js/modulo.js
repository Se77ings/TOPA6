export default async function inicio() {
  // Cria a aplicação PixiJS
  const app = new PIXI.Application();

  // Inicializa a aplicação
  await app.init({ background: "#1099bb", resizeTo: window });

  // Adiciona o canvas da aplicação ao DOM
  document.body.appendChild(app.canvas);

  // Carrega a textura do coelho
  const texture = await PIXI.Assets.load("../img/bunny.png");

  // Cria o sprite do coelho
  const bunny = new PIXI.Sprite(texture);

  bunny.width = 150;
  bunny.height = 150;

  // Adiciona o coelho ao palco
  app.stage.addChild(bunny);

  // Centraliza o coelho na tela
  bunny.anchor.set(0.5);
  bunny.x = app.screen.width / 2;
  bunny.y = app.screen.height / 2;

  // Função de animação para girar o coelho
  app.ticker.add(() => {
    bunny.rotation += 0.05; // Define a velocidade de rotação
  });

  window.addEventListener("resize", () => {
    app.renderer.resize(window.innerWidth, window.innerHeight); // Redimensiona o canvas
    // Recentraliza o coelho
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;
  });
}
