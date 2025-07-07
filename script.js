let selectedIndex = 0;
const games = [
  { emoji: "🎨", file: "color.html", instructions: "Pick the real color name, not the text!" },
  { emoji: "🔢", file: "guess.html", instructions: "Guess the number between 1 to 100!" },
  { emoji: "🧠", file: "memory.html", instructions: "Match the cards within the time limit!" },
  { emoji: "🎯", file: "typing.html", instructions: "Type the word as fast as you can!" },
  { emoji: "🔍", file: "quiz.html", instructions: "Answer Python programming MCQs!" }
];

function spinWheel() {
  let angle = Math.floor(3600 + Math.random() * 360); // Multiple spins
  document.getElementById("wheel").style.transform = `rotate(${angle}deg)`;

  selectedIndex = Math.floor(((angle % 360) / 72)) % 5;

  setTimeout(() => {
    showInstructions(selectedIndex);
  }, 4000);
}

function showInstructions(index) {
  document.getElementById("instructionText").innerText = games[index].instructions;
  document.getElementById("instructionModal").style.display = "block";
}

function startGame() {
  window.location.href = games[selectedIndex].file;
}
