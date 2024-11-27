const alphabetAnimals = [
    { letter: 'A', image: 'anta.png' },
    { letter: 'B', image: 'baleia.png' },
    { letter: 'C', image: 'cachorro.png' },
    { letter: 'D', image: 'dinossauro.png' },
    { letter: 'E', image: 'elefante.png' },
    { letter: 'F', image: 'formiga.png' },
    { letter: 'G', image: 'gato.png' },
    { letter: 'H', image: 'hipopotamo.png' },
    { letter: 'I', image: 'iguana.png' },
    { letter: 'J', image: 'jacare.png' },
    { letter: 'L', image: 'leao.png' },
    { letter: 'M', image: 'macaco.png' },
    { letter: 'N', image: 'naja.png' },
    { letter: 'O', image: 'ornitorrinco.png' },
    { letter: 'P', image: 'pinguim.png' },
    { letter: 'Q', image: 'quati.png' },
    { letter: 'R', image: 'rato.png' },
    { letter: 'S', image: 'sapo.png' },
    { letter: 'T', image: 'tubarao.png' },
    { letter: 'U', image: 'urso.png' },
    { letter: 'V', image: 'veado.png' },
    { letter: 'Z', image: 'zebra.png' }
];

const alphabetFruits = [
    { letter: 'A', image: 'amora.png' },
    { letter: 'B', image: 'banana.png' },
    { letter: 'C', image: 'caju.png' },
    { letter: 'D', image: 'damasco.png' },
    { letter: 'F', image: 'figo.png' },
    { letter: 'G', image: 'goiaba.png' },
    { letter: 'J', image: 'jaca.png' },
    { letter: 'K', image: 'kiwi.png' },
    { letter: 'L', image: 'limao.png' },
    { letter: 'M', image: 'manga.png' },
    { letter: 'N', image: 'noz.png' },
    { letter: 'P', image: 'pera.png' },
    { letter: 'R', image: 'roma.png' },
    { letter: 'S', image: 'seriguela.png' },
    { letter: 'T', image: 'tangerina.png' },
    { letter: 'U', image: 'uva.png' },
];

const alphabetObjects = [
    { letter: 'A', image: 'aviao.png' },
    { letter: 'B', image: 'bola.png' },
    { letter: 'C', image: 'camera.png' },
    { letter: 'D', image: 'dado.png' },
    { letter: 'E', image: 'escada.png' },
    { letter: 'F', image: 'faca.png' },
    { letter: 'G', image: 'garfo.png' },
    { letter: 'H', image: 'helicoptero.png' },
    { letter: 'I', image: 'iogurte.png' },
    { letter: 'J', image: 'jarra.png' },
    { letter: 'K', image: 'ketchup.png' },
    { letter: 'L', image: 'lampada.png' },
    { letter: 'M', image: 'microfone.png' },
    { letter: 'N', image: 'notebook.png' },
    { letter: 'O', image: 'oculos.png' },
    { letter: 'P', image: 'pincel.png' },
    { letter: 'Q', image: 'quadro.png' },
    { letter: 'R', image: 'radio.png' },
    { letter: 'S', image: 'sabonete.png' },
    { letter: 'T', image: 'tablet.png' },
    { letter: 'U', image: 'unhas.png' },
    { letter: 'V', image: 'violao.png' },
    { letter: 'X', image: 'xicara.png' },
    { letter: 'Y', image: 'yoyo.png' },
    { letter: 'Z', image: 'ziper.png' }
];

const phaseSize = 5; 
let currentPhase = 0; 
let currentCategory = null; 

const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const lettersContainer = document.querySelector('.letters-container');
const imagesContainer = document.querySelector('.images-container');

// Função de embaralhamento (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
}

function startGame(category) {
    currentCategory = category;  // Salva a categoria escolhida
    startScreen.style.display = 'none';  // Esconde a tela inicial
    gameContainer.classList.remove('hidden');  // Exibe o jogo
    loadPhase(category);  // Carrega a primeira fase da categoria
}

function loadPhase(category) {
    const startIndex = currentPhase * phaseSize;  // Determina o índice inicial da fase
    let phaseItems = category.slice(startIndex, startIndex + phaseSize);  // Pega os itens da fase

    // Embaralha as letras e as imagens
    shuffleArray(phaseItems); // Embaralha os itens (letras e imagens)

    // Limpa as letras e as imagens da tela
    lettersContainer.innerHTML = '';
    imagesContainer.innerHTML = '';

    // Cria as letras e as imagens para a fase
    phaseItems.forEach(item => {
        const letterButton = document.createElement('button');
        letterButton.classList.add('letter');
        letterButton.textContent = item.letter;

        letterButton.addEventListener('click', () => {
            selectedLetter = item.letter;
            const images = document.querySelectorAll('.image');
            images.forEach(img => {
                img.style.pointerEvents = 'auto';
            });
        });

        lettersContainer.appendChild(letterButton);

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
        imageDiv.style.pointerEvents = 'none';
        const imgElement = document.createElement('img');
        imgElement.src = `imagens/${item.image}`;
        imageDiv.appendChild(imgElement);
        imagesContainer.appendChild(imageDiv);

        imageDiv.addEventListener('click', () => checkMatch(item.letter, imageDiv, letterButton));
    });
}

function checkMatch(letter, imageDiv, letterButton) {
    if (letter === selectedLetter) {
        imageDiv.classList.add('matched');
        letterButton.disabled = true;

        // Se todos os itens foram combinados, carrega a próxima fase
        if (document.querySelectorAll('.matched').length === phaseSize) {
            currentPhase++;  // Avança para a próxima fase

            // Se ainda há mais fases na categoria
            if (currentPhase * phaseSize < currentCategory.length) {
                loadPhase(currentCategory);  // Carrega a próxima fase na mesma categoria
            } else {
                console.log('Parabéns! Você completou todas as fases dessa categoria.');
            }
        }
    }
}

// Evento de clique para os botões de categoria
document.getElementById('animal-btn').addEventListener('click', () => startGame(alphabetAnimals));
document.getElementById('fruit-btn').addEventListener('click', () => startGame(alphabetFruits));
document.getElementById('object-btn').addEventListener('click', () => startGame(alphabetObjects));
