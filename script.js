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
    massage.style.color = "rgba(169, 169, 169, 0.856)"
    massage.style.fontSize = "20px";
    massage.textContent = "lets try your luck... :)"
    oppo_score = 0;
    oppoScore.textContent = oppo_score;
    player_score =0;
    playerScore.textContent = player_score;
})


//game start -----
const startbtn = document.querySelector("#startbtn");
const endbtn = document.querySelector("#endbtn");
const continuebtn = document.querySelector("#contbtn");
const action = document.querySelector("#action");
const backbtn = document.querySelector("#backbtn");
const massage = document.querySelector("#massagetext");
startbtn.addEventListener("click", function(){
    startbtn.setAttribute("hidden", "true");
    endbtn.removeAttribute("hidden");
    continuebtn.removeAttribute("hidden");
    massage.textContent = "Now choose your option...."; 
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
const playerimage = document.querySelector("#playerimage");
const id_oppo = document.querySelector("#oppo"); // to rotate the oppo image while shake

show = (r) => {
    massage.style.fontSize = "20px";
    if (r === "win"){
        massage.style.color = "#53fc11e2"
        massage.textContent = ("Yehh you won.. :)");
    }
    else if (r === "lose"){
        massage.style.color = "#ff1818e7"
        massage.textContent = ("Ohh you lose.. :(");
    }
    else {
        massage.textContent = ("Ohhh its a draw.. :|");
    }
}

//btn click effect----
rockbtn.addEventListener("click", () => {
    action.toggleAttribute("hidden");
    playerimage.setAttribute("src", "assets/rock.png");
    oppoimage.setAttribute("src", "assets/rock.png");
        // Start shaking both images
    playerimage.classList.add("shake");
    oppo.classList.add("flip"); // make the image rotate while shaking
    oppoimage.classList.add("shake");
    
    massage.style.color = "rgba(169, 169, 169, 0.856)"
    massage.style.fontSize = "30px";
    massage.textContent = ("...");

    // After 1.5 sec, stop shaking and show result
    setTimeout(() => {
        playerimage.classList.remove("shake");
        oppo.classList.remove("flip"); // make the image rotate while shaking
        oppoimage.classList.remove("shake");

        // Now set images AFTER delay
        playerimage.setAttribute("src", "assets/rock.png");

        const computer = computerChoise();
        computerImage(computer);

        //score system ---
        player = "rock";
        if (player === computer){
            result = "draw";
            show(result);
        }
        else if (computer === "paper"){
            result = "lose";
            oppo_score += 1;
            oppoScore.textContent = oppo_score;
            show(result);
        }
        else {
            result = "win";
            player_score += 1;
            playerScore.textContent = player_score;
            show(result);
        }
    }, 1500);
    
    
})
paperbtn.addEventListener("click", () => {
    action.toggleAttribute("hidden");
    playerimage.setAttribute("src", "assets/rock.png");
    oppoimage.setAttribute("src", "assets/rock.png");
        // Start shaking both images
    playerimage.classList.add("shake");
    oppo.classList.add("flip"); // make the image rotate while shaking
    oppoimage.classList.add("shake");
    massage.style.color = "rgba(169, 169, 169, 0.856)"
    massage.style.fontSize = "30px";
    massage.textContent = ("...");

    // After 1.5 sec, stop shaking and show result
    setTimeout(() => {
        playerimage.classList.remove("shake");
        oppo.classList.remove("flip"); // make the image rotate while shaking
        oppoimage.classList.remove("shake");

        // Now set images AFTER delay
        playerimage.setAttribute("src", "assets/paper.png");

        const computer = computerChoise();
        computerImage(computer);

            //score system ---
        player = "paper";
        if (player === computer){
            result = "draw";
            show(result);
        }
        else if (computer === "scissor"){
            result = "lose";
            oppo_score += 1;
            show(result);
            oppoScore.textContent = oppo_score;
        }
        else {
            result = "win";
            player_score += 1;
            show(result);
            playerScore.textContent = player_score;
        }
    }, 1500);


})
scissorbtn.addEventListener("click", () => {
    action.toggleAttribute("hidden");
    playerimage.setAttribute("src", "assets/rock.png");
    oppoimage.setAttribute("src", "assets/rock.png");
        // Start shaking both images
    playerimage.classList.add("shake");
    oppo.classList.add("flip"); // make the image rotate while shaking
    oppoimage.classList.add("shake");
    massage.style.color = "rgba(169, 169, 169, 0.856)"
    massage.style.fontSize = "30px";
    massage.textContent = ("...");

    // After 1.5 sec, stop shaking and show result
    setTimeout(() => {
        playerimage.classList.remove("shake");
        oppo.classList.remove("flip"); // make the image rotate while shaking
        oppoimage.classList.remove("shake");

        // Now set images AFTER delay
        playerimage.setAttribute("src", "assets/scissor.png");

        const computer = computerChoise();
        computerImage(computer);

        //score system ---
        player = "scissor";
        if (player === computer){
            result = "draw";
            show(result);
        }
        else if (computer === "rock"){
            result = "lose";
            oppo_score += 1;
            show(result);
            oppoScore.textContent = oppo_score;
        }
        else {
            result = "win";
            player_score += 1;
            show(result);
            playerScore.textContent = player_score;
        }
    }, 1500);


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
    massage.style.color = "rgba(169, 169, 169, 0.856)"
    massage.style.fontSize = "20px";
    massage.textContent = "lets try your luck... :)"
})
