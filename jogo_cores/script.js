const colors = ["red", "green", "blue", "yellow"];
let gameSequence = [];
let playerSequence = [];
let score = 0;
let playerTurn = false;

// Botões coloridos
const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const yellowButton = document.getElementById("yellow");
const startButton = document.getElementById("startBtn");
const scoreDisplay = document.getElementById("score");

const buttons = {
    red: redButton,
    green: greenButton,
    blue: blueButton,
    yellow: yellowButton,
};

// Função para gerar a próxima cor
function nextSequence() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gameSequence.push(randomColor);
    playerSequence = [];
    playSequence();
}

// Função para acender os botões da sequência gerada
function playSequence() {
    playerTurn = false;
    setButtonsInactive(true); // Desativa os botões enquanto a sequência é mostrada
    let delay = 700;

    gameSequence.forEach((color, index) => {
        setTimeout(() => {
            flashButton(color);
        }, delay * (index + 1));
    });

    setTimeout(() => {
        playerTurn = true;
        setButtonsInactive(false); // Reativa os botões após a sequência ser mostrada
    }, delay * (gameSequence.length + 1));
}

// Efeito de animação ao acender os botões
function flashButton(color) {
    const button = buttons[color];
    button.classList.add("active");
    setTimeout(() => {
        button.classList.remove("active");
    }, 500); // Animação dura 500ms para ser mais rápida e clara
}

// Desativa ou ativa os botões durante a sequência
function setButtonsInactive(state) {
    Object.values(buttons).forEach(button => {
        if (state) {
            button.classList.add("inactive");
        } else {
            button.classList.remove("inactive");
        }
    });
}

// Verifica a sequência do jogador
function checkPlayerSequence() {
    const currentMove = playerSequence.length - 1;

    if (playerSequence[currentMove] !== gameSequence[currentMove]) {
        resetGame();
        return;
    }

    if (playerSequence.length === gameSequence.length) {
        score++;
        updateScore();
        setTimeout(() => {
            nextSequence();
        }, 1000);
    }
}

// Função para iniciar o jogo
function startGame() {
    score = 0;
    gameSequence = [];
    playerSequence = [];
    updateScore();
    nextSequence();
}

// Reseta o jogo caso a sequência esteja errada
function resetGame() {
    alert("Você errou! Tente novamente.");
    score = 0;
    gameSequence = [];
    playerSequence = [];
    playerTurn = false;
    updateScore();
}

// Atualiza a pontuação na tela
function updateScore() {
    scoreDisplay.innerText = `Pontuação: ${score}`;
}

// Evento de clique nos botões de cores
document.querySelectorAll(".color-button").forEach(button => {
    button.addEventListener("click", (e) => {
        if (!playerTurn) return;

        const clickedColor = e.target.id;
        playerSequence.push(clickedColor);
        flashButton(clickedColor);
        checkPlayerSequence();
    });
});

// Evento de clique no botão de iniciar jogo
startButton.addEventListener("click", startGame);

function showErrorMessage() {
    const message = document.createElement('div');
    message.id = 'error-message';
    message.innerText = "Você errou! Tente novamente.";
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);  // A mensagem desaparece após 3 segundos
}

// Modifique a função `resetGame` para chamar `showErrorMessage`:
function resetGame() {
    showErrorMessage();  // Exibe a mensagem de erro
    score = 0;
    gameSequence = [];
    playerSequence = [];
    playerTurn = false;
    updateScore();
}


