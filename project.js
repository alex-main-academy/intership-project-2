const computerPlay = () => {
  const randomNumber = Number(Math.random() * 2).toFixed(0);
  if (+randomNumber === 0) {
    return "Rock";
  } else if (+randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
};

const playRound = () => {
  const playerSelection = prompt("Enter your selection");
  const computerSelection = computerPlay();

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "This game is a draw.";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You lose! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You win! The stone broke the scissors";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You win Paper covered the stone";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You lose! Scissors cut the paper";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You win! Scissors cut the paper";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You lose! The stone broke the scissors";
  }
};

const game = () => {
  let score = 0;

  for (let i = 0; i < 5; i++) {
    const word = playRound();
    console.log(word);

    if (word.includes("win")) {
      score += 1;
    }
  }

  if (score > 2) {
    console.log(`Yeah! You win this round!`);
  } else {
    console.log(`Oh... You lose this round`);
  }
};

game();
