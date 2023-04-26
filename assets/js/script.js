let wins = 0;
let ties = 0;
let losses = 0;
var options = ["Rock", "Paper", "Scissors"];

document.getElementById("startGame").addEventListener("click", function () {
  var userInput = prompt("Type your choice of Rock, Paper or Scissors");
  if (!userInput) {
    return alert("Make a choice fool!");
  }

  // userInput = userInput.toUpperCase();

  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("Frankie chose " + computerChoice);

  if (userInput === computerChoice) {
    ties++;
    window.alert("It's a tie sucka!");
  } else if (
    (userInput === "Rock" && computerChoice === "Scissors") ||
    (userInput === "Paper" && computerChoice === "Rock") ||
    (userInput === "Scissors" && computerChoice === "Paper")
  ) {
    wins++;
    window.alert("You win!!");
  } else {
    losses++;
    window.alert("Booo you suck, Frankie wins!!");
  }

  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );
});
