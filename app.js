const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = 'Pierre'
  }
  if (randomNumber === 2) {
    computerChoice = 'Ciseaux'
  }
  if (randomNumber === 3) {
    computerChoice = 'Papier'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'égalité!'
  }
  if (computerChoice === 'Pierre' && userChoice === "Papier") {
    result = 'Gagné!'
  }
  if (computerChoice === 'Pierre' && userChoice === "Ciseaux") {
    result = 'Perdu!'
  }
  if (computerChoice === 'Pierre' && userChoice === "Ciseaux") {
    result = 'Gagné!'
  }
  if (computerChoice === 'Papier' && userChoice === "Pierre") {
    result = 'Perdu!'
  }
  if (computerChoice === 'Ciseaux' && userChoice === "Pierre") {
    result = 'Gagné!'
  }
  if (computerChoice === 'Ciseaux' && userChoice === "Papier") {
    result = 'Perdu!'
  }
  resultDisplay.innerHTML = result
}
