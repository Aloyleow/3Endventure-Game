//State
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const content = document.querySelector("#content");

const playerRoll = document.querySelector(".playerNumber");
const enemyRoll = document.querySelector(".enemyNumber");

const playerHealth = document.querySelector("#playerHealth");
const enemyHealth = document.querySelector("#enemyHealth");

let rpg = {
    storyText:[],
    deathText:[],
    buttonsEffect: {
        charSelect: [],
        trainingSelect: [],
        pathSelect: [],
        roll: [],
    },
    numberRoll: [1,2,3,4,5,6,7,8,9,10],
    playerScore: [],
    enemyScore:[],
    health: {
        anomalyHealth: 50,
        playerHealthHuman: 35,
        playerHealthDragonLord: 50,
        playerHealthaftTrain: 50,
        playerHealthGOW: 100, 
    },

}
//PUSH TEXT FUNCTIONS
function pushText(){
    rpg.storyText.push("To be or not to pee, so who you wan to bee");
    rpg.storyText.push("HUMAN !!!! What do you wan to do ?");
    rpg.storyText.push("Squash Squash kill that thing");

    rpg.deathText.push("YOU DIED!!!! killed by a slime...lol...noob");
}



function pushPathSelectButtons() {
    rpg.buttonsEffect.pathSelect.push(
        "Fight a Slimeeee",
        "Fight a Dragon!!!",
        "Train with GOW!",
        "Chill...",
        "Chill lahh....",
        "Fight Anomaly",
        "Roll"
    )
}

function pushCharSelectButtons(){  
    rpg.buttonsEffect.charSelect.push(
        "Human",
        "Knight!",
        "Mage"
    )
    
}

//RNG FUNCTIONS
function rng(){
    let y = Math.random();
    if (y < 0.1) {
        return rpg.numberRoll[0]; 
    } else if (y < 0.2) {
        return rpg.numberRoll[1];
    } else if (y < 0.3) {
        return rpg.numberRoll[2];
    } else if (y < 0.4) {
        return rpg.numberRoll[3];
    } else if (y < 0.5) {
        return rpg.numberRoll[4];
    } else if (y < 0.6) {
        return rpg.numberRoll[5];
    } else if (y < 0.7) {
        return rpg.numberRoll[6];
    } else if (y < 0.8) {
        return rpg.numberRoll[7];
    } else if (y < 0.9) {
        return rpg.numberRoll[8];
    } else if (y <= 1) {
        return rpg.numberRoll[9];
    }   
}


//BUTTON FUNCTIONS
function charSelectButtons() {
    button1.textContent = rpg.buttonsEffect.charSelect[0];
    button2.textContent = rpg.buttonsEffect.charSelect[1];
    button3.textContent = rpg.buttonsEffect.charSelect[2];
    button1.addEventListener("click", humanSelectPage)
}

function humanSelectButtons() {
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[3];
    button1.addEventListener("click", fightSlimePage);

}
function rollButton() {
    button2.addEventListener("click", () =>{
        rpg.playerScore = rng();
        rpg.enemyScore = rng();
        let x = rpg.playerScore;
        let y = rpg.enemyScore;
        playerRoll.textContent = x
        enemyRoll.textContent = y
    })

}

function winCond() {
    if(rpg.playerScore <= rpg.enemyScore){
        content.textContent = rpg.deathText[0];
    } else {
        console.log("lol");
    }
}


// DISPLAY FUNCTIONS

function hideScoreHealth() {
    playerRoll.style.visibility = "hidden";
    playerHealth.style.visibility = "hidden";
    enemyRoll.style.visibility = "hidden";
    enemyHealth.style.visibility = "hidden";
}

function fightRollDisplay() {
    playerRoll.style.visibility = "visible";
    enemyRoll.style.visibility = "visible";
    button1.style.visibility = "hidden";
    button3.style.visibility = "hidden";
    button2.textContent = "Roll";
    rollButton()
}

//PAGE SELECT FUNCTIONS

function charSelectPage(){
    content.textContent = rpg.storyText[0];
    charSelectButtons();
}

function humanSelectPage(){
    content.textContent = rpg.storyText[1];
    humanSelectButtons()
}

function fightSlimePage(){
    content.textContent = rpg.storyText[2];
    fightRollDisplay()
}



function render(){
    pushCharSelectButtons ();
    pushText();
    pushPathSelectButtons();
    hideScoreHealth();
    charSelectPage();

}
render();
console.log(button1, button2, button3,);