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
    { letter: 'L', image: 'leao.png' },
    { letter: 'M', image: 'macaco.png' },
    { letter: 'N', image: 'naja.png' },
    { letter: 'O', image: 'ornitorrinco.png' },
    { letter: 'P', image: 'pinguim.png' },
    { letter: 'Q', image: 'quati.png'},
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
    { letter: 'C', image: 'caju.png'},
    { letter: 'D', image: 'damasco.png' },
    { letter: 'F', image: 'figo.png' },
    { letter: 'G', image: 'goiaba.png' },
    { letter: 'J', image: 'jaca.png' },
    { letter: 'K', image: 'kiwi.png'},
    { letter: 'L', image: 'limao.png'},
    { letter: 'M', image: 'manga.png' },
    { letter: 'N', image: 'noz.png' },
    { letter: 'P', image: 'pera.png' },
    { letter: 'R', image: 'roma.png' },
    { letter: 'S', image: 'seriguela.png' },
    { letter: 'T', image: 'tangerina.png' },
    { letter: 'U', image: 'uva.png'},
];


const alphabetObjects = [
    { letter: 'A', image: 'aviao.png' },
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
    { letter: 'V', image: 'violao.png' },
    { letter: 'X', image: 'xicara.png'},
    { letter: 'Y', image: 'yoyo.png'},
    { letter: 'Z', image: 'ziper.png' }
];

// Elementos HTML
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const lettersContainer = document.querySelector('.letters-container');
const imagesContainer = document.querySelector('.images-container');

let selectedLetter = null; // Variável para armazenar a letra selecionada

// Função para iniciar o jogo com a categoria escolhida
function startGame(category) {
    startScreen.style.display = 'none'; // Esconde a tela inicial
    gameContainer.classList.remove('hidden'); // Exibe o contêiner do jogo

    lettersContainer.innerHTML = '';
    imagesContainer.innerHTML = '';

    category.forEach(item => {
        // Criar os botões para as letras
        const letterButton = document.createElement('button');
        letterButton.classList.add('letter');
        letterButton.textContent = item.letter;

        // Evento de clique para selecionar a letra
        letterButton.addEventListener('click', () => {
            selectedLetter = item.letter; // Armazena a letra selecionada
            alert(`Você selecionou a letra: ${selectedLetter}`);

            // Habilita o clique nas imagens
            const images = document.querySelectorAll('.image');
            images.forEach(img => {
                img.style.pointerEvents = 'auto'; // Habilita o clique nas imagens
            });
        });

        lettersContainer.appendChild(letterButton);

        // Criar as imagens
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
        imageDiv.style.pointerEvents = 'none'; // Desabilita o clique nas imagens inicialmente
        const imgElement = document.createElement('img');
        imgElement.src = `imagens/${item.image}`; // Aponte para o caminho correto das imagens
        imageDiv.appendChild(imgElement);
        imagesContainer.appendChild(imageDiv);

        // Evento de clique para verificar correspondência
        imageDiv.addEventListener('click', () => checkMatch(item.letter, imageDiv, letterButton));
    });
}

// Função para verificar correspondência de letra e imagem
function checkMatch(letter, imageDiv, letterButton) {
    if (imageDiv.classList.contains('matched')) {
        alert('Esta imagem já foi relacionada corretamente.');
        return; // Se a imagem já estiver correspondida, não faz nada
    }

    if (letter === selectedLetter) {
        imageDiv.classList.add('matched');
        alert('Correto! Você selecionou a imagem correspondente.');
        // Desativar o botão correspondente após a seleção correta
        letterButton.disabled = true;
    } else {
        alert('Incorreto! Tente novamente.');
    }

    // Desabilita o clique nas imagens após a tentativa
    const images = document.querySelectorAll('.image');
    images.forEach(img => {
        img.style.pointerEvents = 'none'; // desabilita o clique nas imagens
    });
}

// Eventos de clique nos botões de escolha de modo
document.getElementById('animal-btn').addEventListener('click', () => startGame(alphabetAnimals));
document.getElementById('fruit-btn').addEventListener('click', () => startGame(alphabetFruits));
document.getElementById('object-btn').addEventListener('click', () => startGame(alphabetObjects));

