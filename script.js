// ─── ELEMENTS ───────────────────────────────────────────────────────────────
const landing       = document.querySelector("#landing");
const rpsgame       = document.querySelector("#rpsgame");
const playbtn       = document.querySelector("#playbtn");
const homeNav       = document.querySelector("#homeNav");
const playNav       = document.querySelector("#playNav");

const startbtn      = document.querySelector("#startbtn");
const endbtn        = document.querySelector("#endbtn");
const contbtn       = document.querySelector("#contbtn");
const action        = document.querySelector("#action");
const backbtn       = document.querySelector("#backbtn");
const massagetext   = document.querySelector("#massagetext");

const rockbtn       = document.querySelector("#rockbtn");
const paperbtn      = document.querySelector("#paperbtn");
const scissorbtn    = document.querySelector("#scissorbtn");

const playerimage   = document.querySelector("#playerimage");
const oppoimage     = document.querySelector("#oppoimage");
const playerArena   = document.querySelector("#playerArena");
const oppoArena     = document.querySelector("#oppoArena");
const playerScoreEl = document.querySelector("#playerScore");
const oppoScoreEl   = document.querySelector("#oppoScore");
const playerScoreBox= document.querySelector("#playerScoreBox");
const oppoScoreBox  = document.querySelector("#oppoScoreBox");

// ─── STATE ───────────────────────────────────────────────────────────────────
let playerScore = 0;
let oppoScore   = 0;
let gameActive  = false;

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function show(screen) {
  if (screen === "game") {
    landing.classList.add("hidden");
    rpsgame.classList.remove("hidden");
    rpsgame.classList.add("flex");
  } else {
    rpsgame.classList.add("hidden");
    rpsgame.classList.remove("flex");
    landing.classList.remove("hidden");
  }
}

function showOverlay() {
  action.classList.remove("hidden");
  action.classList.add("flex");
}
function hideOverlay() {
  action.classList.add("hidden");
  action.classList.remove("flex");
}

function setMessage(text, color = "neutral") {
  massagetext.classList.remove("animate-blink", "result-anim");
  void massagetext.offsetWidth; // reflow to restart animation

  const colorMap = {
    win:     "#C8FF00",
    lose:    "#FF4444",
    neutral: "rgba(255,255,255,0.4)",
    waiting: "rgba(255,255,255,0.4)",
  };
  massagetext.style.color = colorMap[color] || colorMap.neutral;
  massagetext.textContent = text;

  if (color === "win" || color === "lose") {
    massagetext.classList.add("result-anim");
  } else if (color === "waiting") {
    massagetext.classList.add("animate-blink");
  }
}

function resetArenaStyles() {
  playerArena.classList.remove("win","lose");
  oppoArena.classList.remove("win","lose");
  playerScoreBox.classList.remove("win","lose");
  oppoScoreBox.classList.remove("win","lose");
}

function flashResult(result) {
  resetArenaStyles();
  if (result === "win") {
    playerArena.classList.add("win");
    oppoArena.classList.add("lose");
    playerScoreBox.classList.add("win");
    oppoScoreBox.classList.add("lose");
  } else if (result === "lose") {
    playerArena.classList.add("lose");
    oppoArena.classList.add("win");
    playerScoreBox.classList.add("lose");
    oppoScoreBox.classList.add("win");
  }
  // clear after 1.8s
  setTimeout(resetArenaStyles, 1800);
}

function computerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * 3)];
}

function getImageSrc(choice) {
  const map = {
    rock:    "assets/rock.png",
    paper:   "assets/paper.png",
    scissor: "assets/scissor.png",
  };
  return map[choice];
}

function determineResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock"    && computer === "scissor") ||
    (player === "paper"   && computer === "rock")    ||
    (player === "scissor" && computer === "paper")
  ) return "win";
  return "lose";
}

function resetGame() {
  playerScore = 0;
  oppoScore   = 0;
  playerScoreEl.textContent = "0";
  oppoScoreEl.textContent   = "0";
  playerimage.src = "assets/rock.png";
  oppoimage.src   = "assets/rock.png";
  setMessage("let's try your luck... :)", "waiting");
  resetArenaStyles();
}

// ─── PLAY CHOICE ─────────────────────────────────────────────────────────────
function playRound(playerPick) {
  if (!gameActive) return;

  hideOverlay();

  // Show rock (fist) while shaking = "countdown"
  playerimage.src = "assets/rock.png";
  oppoimage.src   = "assets/rock.png";

  playerimage.classList.add("shaking");
  oppoimage.classList.add("shaking", "flipping");

  setMessage("...", "waiting");

  setTimeout(() => {
    // Stop animations
    playerimage.classList.remove("shaking");
    oppoimage.classList.remove("shaking", "flipping");

    const computer = computerChoice();
    playerimage.src = getImageSrc(playerPick);
    oppoimage.src   = getImageSrc(computer);

    const result = determineResult(playerPick, computer);

    if (result === "win") {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      setMessage("Yeah! You won 🎉", "win");
    } else if (result === "lose") {
      oppoScore++;
      oppoScoreEl.textContent = oppoScore;
      setMessage("Ohh you lost 💀", "lose");
    } else {
      setMessage("It's a draw 🤝", "neutral");
    }

    flashResult(result);
  }, 1200);
}

// ─── NAV ─────────────────────────────────────────────────────────────────────
playbtn.addEventListener("click", () => show("game"));
playNav.addEventListener("click", () => show("game"));
homeNav.addEventListener("click", () => {
  show("landing");
  gameActive = false;
  resetGame();
  // reset buttons
  startbtn.classList.remove("hidden");
  endbtn.classList.add("hidden");
  contbtn.classList.add("hidden");
});

// ─── GAME CONTROLS ───────────────────────────────────────────────────────────
startbtn.addEventListener("click", () => {
  gameActive = true;
  startbtn.classList.add("hidden");
  endbtn.classList.remove("hidden");
  contbtn.classList.remove("hidden");
  setMessage("Now choose your move →", "waiting");
});

contbtn.addEventListener("click", () => {
  if (!gameActive) return;
  showOverlay();
});

backbtn.addEventListener("click", () => hideOverlay());

endbtn.addEventListener("click", () => {
  gameActive = false;
  startbtn.classList.remove("hidden");
  endbtn.classList.add("hidden");
  contbtn.classList.add("hidden");
  hideOverlay();
  resetGame();
});

// ─── CHOICE BUTTONS ──────────────────────────────────────────────────────────
rockbtn.addEventListener("click",    () => playRound("rock"));
paperbtn.addEventListener("click",   () => playRound("paper"));
scissorbtn.addEventListener("click", () => playRound("scissor"));

// Also allow clicking the parent wrap (bigger tap area on mobile)
rockbtn.closest(".choice-wrap").addEventListener("click",    () => playRound("rock"));
paperbtn.closest(".choice-wrap").addEventListener("click",   () => playRound("paper"));
scissorbtn.closest(".choice-wrap").addEventListener("click", () => playRound("scissor"));
