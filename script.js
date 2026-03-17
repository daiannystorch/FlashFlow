const flashcard = [
 // Vogais
  { pergunta: "あ", resposta: "A" },
  { pergunta: "い", resposta: "I" },
  { pergunta: "う", resposta: "U" },
  { pergunta: "え", resposta: "E" },
  { pergunta: "お", resposta: "O" },

  // Família do K
  { pergunta: "か", resposta: "KA" },
  { pergunta: "き", resposta: "KI" },
  { pergunta: "く", resposta: "KU" },
  { pergunta: "け", resposta: "KE" },
  { pergunta: "こ", resposta: "KO" },

  // Família do S
  { pergunta: "さ", resposta: "SA" },
  { pergunta: "し", resposta: "SHI" },
  { pergunta: "す", resposta: "SU" },
  { pergunta: "せ", resposta: "SE" },
  { pergunta: "そ", resposta: "SO" },

  // Família do T
  { pergunta: "た", resposta: "TA" },
  { pergunta: "ち", resposta: "CHI" },
  { pergunta: "つ", resposta: "TSU" },
  { pergunta: "て", resposta: "TE" },
  { pergunta: "と", resposta: "TO" },

  // Família do N
  { pergunta: "な", resposta: "NA" },
  { pergunta: "に", resposta: "NI" },
  { pergunta: "ぬ", resposta: "NU" },
  { pergunta: "ね", resposta: "NE" },
  { pergunta: "の", resposta: "NO" },

  // Família do H
  { pergunta: "は", resposta: "HA" },
  { pergunta: "ひ", resposta: "HI" },
  { pergunta: "ふ", resposta: "FU" },
  { pergunta: "へ", resposta: "HE" },
  { pergunta: "ほ", resposta: "HO" },

  // Família do M
  { pergunta: "ま", resposta: "MA" },
  { pergunta: "み", resposta: "MI" },
  { pergunta: "む", resposta: "MU" },
  { pergunta: "め", resposta: "ME" },
  { pergunta: "も", resposta: "MO" },

  // Família do Y
  { pergunta: "や", resposta: "YA" },
  { pergunta: "ゆ", resposta: "YU" },
  { pergunta: "よ", resposta: "YO" },

  // Família do R
  { pergunta: "ら", resposta: "RA" },
  { pergunta: "り", resposta: "RI" },
  { pergunta: "る", resposta: "RU" },
  { pergunta: "れ", resposta: "RE" },
  { pergunta: "ろ", resposta: "RO" },

  // Família do W e N (sozinho)
  { pergunta: "わ", resposta: "WA" },
  { pergunta: "を", resposta: "WO" },
  { pergunta: "ん", resposta: "N" }
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
