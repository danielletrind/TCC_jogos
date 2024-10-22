const startButton = document.getElementById("start-button");
const gameScreen = document.getElementById("game-screen");
const startScreen = document.getElementById("start-screen");
const questionText = document.getElementById("question-text");
const imageElement = document.getElementById("image");
const choices = Array.from(document.getElementsByClassName("choice"));
const feedback = document.getElementById("feedback");
const nextPhaseButton = document.getElementById("next-phase-button");

let currentPhase = 0; 

const phases = [
    {
        question: "Qual sentido usamos?",
        image: "imagens/binoculo.png",
        answers: ["👄", "👁️", "✋","👂"],
        correctAnswer: 1
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/fone-de-ouvido.png",
        answers: ["👂", "👁️", "👄","✋"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/luva.png",
        answers: ["👄", "👂", "✋","👁️"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/oculos.png",
        answers: ["👄", "👁️", "👂","✋"],
        correctAnswer: 1
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/pizza.png",
        answers: ["👄", "✋", "👂","👁️"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/tv.png",
        answers: ["👁️", "👂", "👄","✋"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/teclado.png",
        answers: ["✋", "👂", "👄","👁️"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/espelho.png",
        answers: ["👄", "👂", "👁️","✋"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/tambor.png",
        answers: ["✋", "👂", "👁️","👄"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/lapis.png",
        answers: ["👁️", "👂", "✋","👄"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/urso-teddy.png",
        answers: ["👄", "✋", "👁️","👂"],
        correctAnswer: 1
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/macarrao.jpg",
        answers: ["👂", "👁️", "👄","✋"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/radio.png",
        answers: ["👁️", "👂", "👄","✋"],
        correctAnswer: 1
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/chocolate.png",
        answers: ["👄", "👁️", "👂","✋"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/megafone.png",
        answers: ["👁️", "✋", "👂","👄"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/hamburguer.png",
        answers: ["👄", "✋", "👂","👁️"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/cacto.png",
        answers: ["👂", "👄", "✋","👁️"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/abra-o-livro.png",
        answers: ["👁️", "✋", "👂","👄"],
        correctAnswer: 0
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/caixas-de-som.png",
        answers: ["👄", "✋", "👂","👁️"],
        correctAnswer: 2
    },
    {
        question: "Qual sentido usamos?",
        image: "imagens/telescopio.png",
        answers: ["👁️", "✋", "👄","👂"],
        correctAnswer: 0
    },
];

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


nextPhaseButton.onclick = () => {
    currentPhase++;
    if (currentPhase < phases.length) {
        loadPhase(currentPhase);
    } else {
        feedback.textContent = "Você completou todas as fases!";
        nextPhaseButton.style.display = "none";
    }
};


startButton.onclick = () => {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    loadPhase(currentPhase);
};
