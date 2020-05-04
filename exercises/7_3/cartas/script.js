const transforms = [
  "rotating",
  "translateUp",
  "translateDown",
  "scaleUp",
  "squareRotating",
  "skewUp",
  "skewDown",
]; // Array de classes de transformações

const cartas = [
  "tres-de-ouros.png",
  "quatro-de-paus.png",
  "cinco-de-ouros.png",
  "seis-de-copas.png",
  "sete-de-paus.png",
  "sete-de-espadas.png",
  "nove-de-espadas.png",
];//ARRAY DAS CARTAS

//VARIÁVEL DA GRADE DE CARTAS
let gridCartas = document.querySelector(".grid-de-cartas");

//FUNÇÃO QUE ADICIONA CARTAS AO GRID E SUAS DEVIDAS CLASSES
const versodaCarta = document.querySelector(".verso-da-carta");
versodaCarta.addEventListener("click", () => {
  let image = document.createElement("img");
  image.classList.add(`${transforms[transformaAleatorio()]}`);
  image.classList.add("cartas");
  image.src = `${cartas[transformaAleatorio()]}`;
  gridCartas.appendChild(image);
});

//FUNÇÃO DO NÚMERO ALEATÓRIO
let transformaAleatorio = () => Math.floor(Math.random() * transforms.length);
