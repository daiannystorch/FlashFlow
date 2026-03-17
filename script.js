const flashcard = [
  {
		pergunta: "O que é JavaScript?",
		resposta: "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web."
	},
	{
		pergunta: "O que são funções de callback em JavaScript?",
		resposta: "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação."
	},
	{
		pergunta: "O que é o this em JavaScript?",
		resposta: "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada."
	},
	{
		pergunta: "O que é hoisting em JavaScript?",
		resposta: 'Hoisting é o comportamento em que declarações de variáveis e funções são "movidas" para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código.'
	},
	{
		pergunta: "O que são tipos primitivos em JavaScript?",
		resposta: "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos."
	},
];
let cartaoatual = 0;
const flashcardElement = document.querySelector('.flashcard');
const perguntaElement = document.querySelector('.pergunta');
const respostaElement = document.querySelector('.resposta');
const cliqueNoCardElement = document.querySelector('.clique-no-card');
const contadorElement = document.querySelector('.contador');
const btnProximoElement = document.querySelector('.btn-proximo');

flashcardElement.addEventListener('click', function () {
  flashcardElement.classList.toggle('virado'); });

function mostrarCartao() {
  perguntaElement.textContent = flashcard[cartaoatual].pergunta;
  respostaElement.textContent = flashcard[cartaoatual].resposta;
  contadorElement.textContent = `Card ${cartaoatual + 1} de ${flashcard.length}`;
}
btnProximoElement.addEventListener('click', function() {
  cartaoatual++;
  if (cartaoatual === flashcard.length) {
    cartaoatual = 0;
  }
  if (flashcardElement.classList.contains('virado')) {
    flashcardElement.classList.remove('virado');
  }
  mostrarCartao();

});

mostrarCartao();
