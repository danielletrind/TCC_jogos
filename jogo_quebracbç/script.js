const startButton = document.getElementById("start-button");
const gameScreen = document.getElementById("game-screen");
const startScreen = document.getElementById("start-screen");
const questionText = document.getElementById("question-text");
const imageElement = document.getElementById("image");
const choices = Array.from(document.getElementsByClassName("choice"));
const feedback = document.getElementById("feedback");
const nextPhaseButton = document.getElementById("next-phase-button");

let currentPhase = 0; // Fase inicial

const phases = [
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem1.jpg",
        answers: ["👄", "👁️", "✋","👂"],
        correctAnswer: 1
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem2.jpg",
        answers: ["👂", "👁️", "👄","✋"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem3.jpg",
        answers: ["👄", "👂", "✋","👁️"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem4.jpg",
        answers: ["👄", "👁️", "👂","✋"],
        correctAnswer: 1
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem5.jpg",
        answers: ["👄", "✋", "👂","👁️"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem6.jpg",
        answers: ["👁️", "👂", "👄","✋"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem7.jpg",
        answers: ["✋", "👂", "👄","👁️"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem8.jpg",
        answers: ["👄", "👂", "👁️","✋"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem9.jpg",
        answers: ["✋", "👂", "👁️","👄"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem10.jpg",
        answers: ["👁️", "👂", "✋","👄"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem11.jpg",
        answers: ["👄", "✋", "👁️","👂"],
        correctAnswer: 1
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem12.jpg",
        answers: ["👂", "👁️", "👄","✋"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem13.jpg",
        answers: ["👁️", "👂", "👄","✋"],
        correctAnswer: 1
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem14.jpg",
        answers: ["👄", "👁️", "👂","✋"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem15.jpg",
        answers: ["👁️", "👂", "✋","👄"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem16.jpg",
        answers: ["👄", "✋", "👂","👁️"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem17.jpg",
        answers: ["👂", "👄", "✋","👁️"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem18.jpg",
        answers: ["👁️", "✋", "👂","👄"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem19.jpg",
        answers: ["👄", "👂", "✋","👁️"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "caminho/para/imagem20.jpg",
        answers: ["👁️", "✋", "👄","👂"],
        correctAnswer: 0
    },
];

// Função para carregar a fase
function loadPhase(phaseIndex) {
    const phase = phases[phaseIndex];
    questionText.textContent = phase.question;
    imageElement.src = phase.image;
    feedback.textContent = "";
    nextPhaseButton.style.display = "none";

    choices.forEach((choice, index) => {
        choice.textContent = phase.answers[index];
        choice.style.backgroundColor = "#78C2AD"; 
        choice.onclick = () => {
            if (index === phase.correctAnswer) {
                feedback.textContent = "Correto!";
                choice.style.backgroundColor = "#90EE90";
                nextPhaseButton.style.display = "block";
            } else {
                feedback.textContent = "Tente novamente!";
                choice.style.backgroundColor = "#FF6F61";
            }
        };
    });
}

// Avançar para a próxima fase
nextPhaseButton.onclick = () => {
    currentPhase++;
    if (currentPhase < phases.length) {
        loadPhase(currentPhase);
    } else {
        feedback.textContent = "Você completou todas as fases!";
        nextPhaseButton.style.display = "none";
    }
};

// Iniciar o jogo
startButton.onclick = () => {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    loadPhase(currentPhase);
};
