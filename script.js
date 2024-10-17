
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const difficultySelector = document.getElementById("difficulty");
const startButton = document.getElementById("start-game");
const gameBoard = document.getElementById("game-board");
const difficultySelection = document.getElementById("difficulty-selection");
const cardsContainer = document.querySelector(".cards");

let matched = 0;
let score = 0;
let timeLeft = 60;
let cardOne, cardTwo;
let disableDeck = false;
let timer;


difficultySelector.addEventListener("change", () => {
    startButton.style.display = "block";  
});

function updateScore(points) {
    score += points;
    scoreDisplay.textContent = `Pontuação: ${score}`;
}

function flipCard({ target: clickedCard }) {
    if (cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function showWinModal() {
    const winModal = document.getElementById("win-modal");
    winModal.style.display = "flex";  

    const playAgainButton = document.getElementById("play-again-button");
    playAgainButton.onclick = function() {
        winModal.style.display = "none";  
        resetGame();  
    };

    const backToSelectionButton = document.getElementById("back-to-selection-button");
    backToSelectionButton.onclick = function() {
        winModal.style.display = "none";  
        gameBoard.style.display = "none";  
        difficultySelection.style.display = "block"; 
        resetGame();  
    };
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        updateScore(10);
        if (matched === numberOfPairs) {
            setTimeout(() => {
                showWinModal();  s
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}


function shuffleCard() {
    matched = 0;
    score = 0;
    updateScore(0);
    disableDeck = false;
    cardOne = cardTwo = "";

    let arr = [];
    for (let i = 1; i <= numberOfPairs; i++) {
        arr.push(i, i);
    }
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cardsContainer.innerHTML = "";  
    arr.forEach((num) => {
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = `
            <div class="view front-view"><img src="imagens/pontoi.png" alt="icon"></div>
            <div class="view back-view"><img src="imagens/img-${num}.png" alt="card-img"></div>`;
        card.addEventListener("click", flipCard);
        cardsContainer.appendChild(card);
    });
}

function startTimer() {
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(() => {
            timeLeft--;
            document.getElementById("timer").textContent = `Tempo restante: ${timeLeft} segundos`;
            if (timeLeft <= 0) {
                clearInterval(timer);  
                alert('O tempo acabou! Tente novamente.');  
                resetGame();  
            }
        }, 1000);  
    }


function showTimeUpModal() {
    const modal = document.getElementById("time-up-modal");
    modal.style.display = "flex";  
    const retryButton = document.getElementById("retry-button");
    retryButton.onclick = function() {
        modal.style.display = "none";  
        resetGame();  
    };
}

function resetGame() {
    timeLeft = 60;  
    score = 0;  
    matched = 0;  
    updateScore(0);  
    shuffleCard();  
    startTimer(); 
}

function hideTimeUpModal() {
    const modal = document.getElementById("time-up-modal");
    modal.style.display = "none";  
}


function startTimer() {
    if (timer) {
        clearInterval(timer); 
    }
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Tempo restante: ${timeLeft} segundos`;
        if (timeLeft <= 0) {
            clearInterval(timer);  
            showTimeUpModal(); 
        }
    }, 1000);  
}

document.getElementById("retry-button").addEventListener("click", () => {
    hideTimeUpModal();  
    resetGame();        
});

startButton.addEventListener("click", () => {
    const selectedDifficulty = difficultySelector.value;

    if (selectedDifficulty === "easy") {
        numberOfPairs = 4;
    } else if (selectedDifficulty === "medium") {
        numberOfPairs = 6;
    } else if (selectedDifficulty === "hard") {
        numberOfPairs = 8;
    }

    
    difficultySelection.style.display = "none";
    gameBoard.style.display = "block";

    resetGame();
    startTimer();
});
