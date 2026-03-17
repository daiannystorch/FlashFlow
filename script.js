const flashcard = [
 // Vogais
  { pergunta: "ア", resposta: "A" },
  { pergunta: "イ", resposta: "I" },
  { pergunta: "ウ", resposta: "U" },
  { pergunta: "エ", resposta: "E" },
  { pergunta: "オ", resposta: "O" },

  // Família do K
  { pergunta: "カ", resposta: "KA" },
  { pergunta: "キ", resposta: "KI" },
  { pergunta: "ク", resposta: "KU" },
  { pergunta: "ケ", resposta: "KE" },
  { pergunta: "コ", resposta: "KO" },

  // Família do S
  { pergunta: "サ", resposta: "SA" },
  { pergunta: "シ", resposta: "SHI" },
  { pergunta: "ス", resposta: "SU" },
  { pergunta: "セ", resposta: "SE" },
  { pergunta: "ソ", resposta: "SO" },

  // Família do T
  { pergunta: "タ", resposta: "TA" },
  { pergunta: "チ", resposta: "CHI" },
  { pergunta: "ツ", resposta: "TSU" },
  { pergunta: "テ", resposta: "TE" },
  { pergunta: "ト", resposta: "TO" },

  // Família do N
  { pergunta: "ナ", resposta: "NA" },
  { pergunta: "ニ", resposta: "NI" },
  { pergunta: "ヌ", resposta: "NU" },
  { pergunta: "ネ", resposta: "NE" },
  { pergunta: "ノ", resposta: "NO" },

  // Família do H
  { pergunta: "ハ", resposta: "HA" },
  { pergunta: "ヒ", resposta: "HI" },
  { pergunta: "フ", resposta: "FU" },
  { pergunta: "ヘ", resposta: "HE" },
  { pergunta: "ホ", resposta: "HO" },

  // Família do M
  { pergunta: "マ", resposta: "MA" },
  { pergunta: "ミ", resposta: "MI" },
  { pergunta: "ム", resposta: "MU" },
  { pergunta: "メ", resposta: "ME" },
  { pergunta: "モ", resposta: "MO" },

  // Família do Y
  { pergunta: "ヤ", resposta: "YA" },
  { pergunta: "ユ", resposta: "YU" },
  { pergunta: "ヨ", resposta: "YO" },

  // Família do R
  { pergunta: "ラ", resposta: "RA" },
  { pergunta: "リ", resposta: "RI" },
  { pergunta: "ル", resposta: "RU" },
  { pergunta: "レ", resposta: "RE" },
  { pergunta: "ロ", resposta: "RO" },

  // Família do W e N (sozinho)
  { pergunta: "ワ", resposta: "WA" },
  { pergunta: "ヲ", resposta: "WO" },
  { pergunta: "ン", resposta: "N" }
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
