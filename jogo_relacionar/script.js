// Array completo de animais de A a Z
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
    { letter: 'J', image: 'jacare.png'},
    { letter: 'K', image: 'kakapo' },
    { letter: 'L', image: 'leao.png' },
    { letter: 'M', image: 'macaco.png' },
    { letter: 'N', image: 'naja.png' },
    { letter: 'O', image: 'ornitorrinco.png' },
    { letter: 'P', image: 'pinguim.png' },
    { letter: 'Q', image: 'quati.png'},
    { letter: 'R', image: 'rato.png' },
    { letter: 'S', image: 'sapo.png' },
    { letter: 'T', image: 'tubarão.png' },
    { letter: 'U', image: 'urso.png' },
    { letter: 'V', image: 'veado' },
    { letter: 'Z', image: 'zebra.png' }
];
const alphabetFruits = [
    { letter: 'A', image: 'amora.png' },
    { letter: 'B', image: 'banana.png' },
    { letter: 'C', image: 'caju.png'},
    { letter: 'D', image: 'damasco.png' },
    { letter: 'E', image: 'embu.png' },
    { letter: 'F', image: 'figo.png' },
    { letter: 'G', image: 'goiaba.png' },
    { letter: 'J', image: 'jaca.png' },
    { letter: 'K', image: 'kiwi.png'},
    { letter: 'L', image: 'lima0.png'},
    { letter: 'M', image: 'manga.png' },
    { letter: 'N', image: 'noz.png' },
    { letter: 'P', image: 'pera.png' },
    { letter: 'R', image: 'roma.png' },
    { letter: 'S', image: 'strawberry.png' },
    { letter: 'T', image: 'tangerina.png' },
    { letter: 'U', image: 'uva.png'},
];


const alphabetObjects = [
    { letter: 'A', image: 'https://th.bing.com/th/id/OIP.JrSdg_F6c4gZ54AMqB9-bwAAAA?rs=1&pid=ImgDetMain/aviao.png' },
    { letter: 'B', image: 'bola.png'},
    { letter: 'C', image: 'camera.png'},
    { letter: 'D', image: 'dado.png'},
    { letter: 'E', image: 'escada.png' },
    { letter: 'F', image: 'faca.png'},
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
    { letter: 'V', image: 'violão.png' },
    { letter: 'X', image: 'xicara.png'},
    { letter: 'Y', image: 'yoyo.png'},
    { letter: 'Z', image: 'ziper.png' }
];

// Elementos HTML
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const lettersContainer = document.querySelector('.letters-container');
const imagesContainer = document.querySelector('.images-container');

// Função para iniciar o jogo com a categoria escolhida
function startGame(category) {
    // Esconder a tela de início e mostrar o contêiner do jogo
    startScreen.style.display = 'none'; // Esconde a tela inicial
    gameContainer.classList.remove('hidden'); // Exibe o contêiner do jogo

    // Limpar os contêineres
    lettersContainer.innerHTML = '';
    imagesContainer.innerHTML = '';

    // Popular contêineres com letras e imagens da categoria
    category.forEach(item => {
        // Criar as letras
        const letterDiv = document.createElement('div');
        letterDiv.classList.add('letter');
        letterDiv.textContent = item.letter;
        lettersContainer.appendChild(letterDiv);

        // Criar as imagens e nomes
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
        const imgElement = document.createElement('img');
        imgElement.src = `images/${item.image}`; // Aponte para o caminho correto das imagens
        const nameElement = document.createElement('p');
        nameElement.textContent = item.name;
        imageDiv.appendChild(imgElement);
        imageDiv.appendChild(nameElement);
        imagesContainer.appendChild(imageDiv);

        // Eventos de clique para comparação
        letterDiv.addEventListener('click', () => checkMatch(letterDiv, imageDiv));
        imageDiv.addEventListener('click', () => checkMatch(letterDiv, imageDiv));
    });
}
displayAlphabet();

function displayAlphabet() {
    const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    allLetters.forEach(letter => {
        const letterDiv = document.createElement('div');
        letterDiv.classList.add('letter');
        letterDiv.textContent = letter;
        lettersContainer.appendChild(letterDiv);
    });
}

// Função para verificar correspondência de letra e imagem
function checkMatch(letterDiv, imageDiv) {
    if (!letterDiv.classList.contains('matched') && !imageDiv.classList.contains('matched')) {
        letterDiv.classList.add('matched');
        imageDiv.classList.add('matched');
    } else {
        letterDiv.classList.add('error');
        imageDiv.classList.add('error');
        setTimeout(() => {
            letterDiv.classList.remove('error');
            imageDiv.classList.remove('error');
        }, 800);
    }
}

function combineFruitsAndObjects() {
    return [alphabetAnimals,...alphabetFruits, ...alphabetObjects];
}

// Eventos de clique nos botões de escolha de modo
document.getElementById('animal-btn').addEventListener('click', () => startGame(alphabetAnimals));
document.getElementById('fruit-btn').addEventListener('click', () => startGame(alphabetFruits));
document.getElementById('object-btn').addEventListener('click', () => startGame(alphabetObjects));