const main = document.querySelector("main");
const rpsgame = document.querySelector("#rpsgame")
const playbtn = document.querySelector("#playbtn");
const homeIcon = document.querySelector("#home");
const playIcon = document.querySelector("#play");
playbtn.addEventListener ("click", function(){
    main.toggleAttribute("hidden", "true");
    rpsgame.toggleAttribute("hidden");
    playIcon.style.color = "#fca311";
    homeIcon.style.color = "white";
})

playIcon.addEventListener ("click", function(){
    main.setAttribute("hidden", "true");
    rpsgame.removeAttribute("hidden");
    playIcon.style.color = "#fca311";
    homeIcon.style.color = "white";
})
homeIcon.addEventListener("click", function(){
    rpsgame.setAttribute("hidden", "true");
    main.removeAttribute("hidden");
    playIcon.style.color = "white";
    homeIcon.style.color = "#fca311";
})


//game start -----
const startbtn = document.querySelector("#startbtn");
const endbtn = document.querySelector("#endbtn");
const continuebtn = document.querySelector("#contbtn");
const action = document.querySelector("#action");
const backbtn = document.querySelector("#backbtn");
startbtn.addEventListener("click", function(){
    startbtn.setAttribute("hidden", "true");
    endbtn.removeAttribute("hidden");
    continuebtn.removeAttribute("hidden");
})


continuebtn.addEventListener("click", function(){
    action.hidden = false;
})

backbtn.addEventListener("click", function(){
    action.toggleAttribute("hidden");
})

const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorbtn = document.querySelector("#scissorbtn");
const oppoimage = document.querySelector("#oppoimage");

computerChoise = () => {
    const choise = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choise[randomIndex];
}

computerImage = (computerChoise) => {
    if (computerChoise == "rock"){
        oppoimage.setAttribute("src", "assets/rock.png");
    }
    else if (computerChoise == "paper"){
        oppoimage.setAttribute("src", "assets/paper.png");
    }
    else {
        oppoimage.setAttribute("src", "assets/scissor.png");
    }
}

let playerScore = document.querySelector("#playerScore");
let oppoScore = document.querySelector("#oppoScore");
let player_score = 0;
let oppo_score = 0;
let player = "";
let result = "";
//btn click effect----
const playerimage = document.querySelector("#playerimage");
rockbtn.addEventListener("click", () => {
    playerimage.setAttribute("src", "assets/rock.png");
    const computer = computerChoise();
    computerImage(computer);
    action.hidden = true;

    //score system ---
    player = "rock";
    if (player === computer){
        result = "draw";
        console.log(result);
    }
    else if (computer === "paper"){
        result = "lose";
        oppo_score += 1;
        console.log(result);
        oppoScore.textContent = oppo_score;
    }
    else {
        result = "win";
        player_score += 1;
        console.log(result);
        playerScore.textContent = player_score;
    }
})
paperbtn.addEventListener("click", () => {
    playerimage.setAttribute("src", "assets/paper.png");
    const computer = computerChoise()
    computerImage(computer);
    action.toggleAttribute("hidden");

    //score system ---
    player = "paper";
    if (player === computer){
        result = "draw";
        console.log(result);
    }
    else if (computer === "scissor"){
        result = "lose";
        oppo_score += 1;
        console.log(result);
        oppoScore.textContent = oppo_score;
    }
    else {
        result = "win";
        player_score += 1;
        console.log(result);
        playerScore.textContent = player_score;
    }
})
scissorbtn.addEventListener("click", () => {
    playerimage.setAttribute("src", "assets/scissor.png");
    const computer = computerChoise()
    computerImage(computer);
    action.toggleAttribute("hidden");

    //score system ---
    player = "scissor";
    if (player === computer){
        result = "draw";
        console.log(result);
    }
    else if (computer === "rock"){
        result = "lose";
        oppo_score += 1;
        console.log(result);
        oppoScore.textContent = oppo_score;
    }
    else {
        result = "win";
        player_score += 1;
        console.log(result);
        playerScore.textContent = player_score;
    }
})
//hover effect ------
rockbtn.addEventListener("mouseenter", () => {
    rockbtn.style.transform = "scale(120%)";
    paperbtn.style.transform = "scale(80%)";
    scissorbtn.style.transform = "scale(80%)";
})
rockbtn.addEventListener("mouseout", () => {
    rockbtn.style.transform = "scale(100%)";
    paperbtn.style.transform = "scale(100%)";
    scissorbtn.style.transform = "scale(100%)";
})
paperbtn.addEventListener("mouseenter", () => {
    rockbtn.style.transform = "scale(80%)";
    paperbtn.style.transform = "scale(120%)";
    scissorbtn.style.transform = "scale(80%)";
})
paperbtn.addEventListener("mouseout", () => {
    rockbtn.style.transform = "scale(100%)";
    paperbtn.style.transform = "scale(100%)";
    scissorbtn.style.transform = "scale(100%)";
})
scissorbtn.addEventListener("mouseenter", () => {
    rockbtn.style.transform = "scale(80%)";
    paperbtn.style.transform = "scale(80%)";
    scissorbtn.style.transform = "scale(120%)";
})
scissorbtn.addEventListener("mouseout", () => {
    rockbtn.style.transform = "scale(100%)";
    paperbtn.style.transform = "scale(100%)";
    scissorbtn.style.transform = "scale(100%)";
})

endbtn.addEventListener("click", function(){
    startbtn.toggleAttribute("hidden");
    endbtn.toggleAttribute("hidden");
    continuebtn.toggleAttribute("hidden");
    oppoimage.setAttribute("src", "assets/rock.png");
    playerimage.setAttribute("src", "assets/rock.png");
    oppo_score = 0;
    oppoScore.textContent = oppo_score;
    player_score =0;
    playerScore.textContent = player_score;
})
