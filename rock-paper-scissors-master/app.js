const choices = ["paper", "rock", "scissors"];
const scoreEl = document.getElementById("score");
const buttons = document.querySelectorAll(".pick");
const selection = document.getElementById("selection");
const main = document.getElementById("main");
const playAgain = document.getElementById("reset");
const user_select = document.getElementById("user_select");
const computer_select = document.getElementById("computer_select");
const result = document.getElementById("win");

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");



let userChoice = undefined;
let score = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");
    main.style.display = "none";
    selection.style.display = "flex";
    checkWinner();
  });
});

openBtn.addEventListener('click',()=> {
  modal.style.display = 'flex';
  openBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none' ;
  openBtn.style.display = 'flex';
})

playAgain.addEventListener("click", () => {
  selection.style.display = "none";
  main.style.display = "flex";
});
function checkWinner() {
  const computerChoice = pickRandomChoice();

  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);

  if (userChoice === computerChoice) {
    //draw
    result.innerText = "It's a Draw";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    //user won
    result.innerText = "You win";
    updateScore();
  } else {
    //user lost
    result.innerText = "You lost";
  }
}

function updateScore() {
  score += 1;
  scoreEl.innerText = score;
}
function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
function updateSelection(selectionEl, choice) {
  selectionEl.classList.remove("btn-paper");
  selectionEl.classList.remove("btn-scissors");
  selectionEl.classList.remove("btn-rock");

  const img = selectionEl.querySelector("img");
  selectionEl.classList.add(`btn-${choice}`);
  img.src = `./images/icon-${choice}.svg`;
  img.alt = choice;
}
