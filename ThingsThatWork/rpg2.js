//State

let rpg = {
    charText:[],
    storyText:[],
    deathText:[],
    buttonsEffect: {
        trainingSelect: [],
        pathSelect: [],
        roll: [],
    },
    charSelect: [],
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
let chosenChar = 0;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const content = document.querySelector("#content");

const playerRoll = document.querySelector(".playerNumber");
const enemyRoll = document.querySelector(".enemyNumber");

const playerHealth = document.querySelector("#playerHealth");
const enemyHealth = document.querySelector("#enemyHealth");



//PUSH TEXT FUNCTIONS
function pushText(){
    rpg.charText.push("To be or not to pee, so who you wan to bee");
    rpg.charText.push("HUMAN !!!! What do you wan to do ?");
    rpg.charText.push("KNIGHT !!! what you wanna slay ?");
    rpg.charText.push("MAGE !!! tiu tiu tiu...")
    
    rpg.storyText.push("Squash Squash kill that thing");
    rpg.storyText.push("Slash Slaush ? Wad de Slush");
    rpg.storyText.push("no mana or banana ?");
    rpg.storyText.push("just a slime....chill..what you gonna do next ?");

    rpg.deathText.push("YOU DIED!!!! killed by a slime...lol...noob");
}

function pushPathSelectButtons() {
    rpg.buttonsEffect.pathSelect.push(
        "Fight a Slimeeee",
        "Fight a Dragon!!!",
        "Train with GOW!",
        "Fight the GOW ?",
        "Chill...",
        "Chill lahh....",
        "Fight Anomaly",
        "Roll"
    )
}

function pushCharSelectButtons(){  
    rpg.charSelect.push(
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
    button1.textContent = rpg.charSelect[0];
    button2.textContent = rpg.charSelect[1];
    button3.textContent = rpg.charSelect[2];
    button1.addEventListener("click", humanPage);
    button2.addEventListener("click", knightPage);
    button3.addEventListener("click", magePage);  
}

function humanSelectButtons() {
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[3];
    button1.addEventListener("click", fightSlimePage);

}

function kmSelectButtons() {
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[2];
    button1.addEventListener("click", fightSlimePage)
}

function humanSelectButtonsAftSlime() {
    button1.textContent = rpg.buttonsEffect.pathSelect[3];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[5];
}

function fightPageThings() {
    playerRoll.style.visibility = "visible";
    enemyRoll.style.visibility = "visible";
    button1.style.visibility = "hidden";
    button3.style.visibility = "hidden";
    button2.textContent = "Roll";
    button2.addEventListener("click", () =>{
        rpg.playerScore = rng();
        rpg.enemyScore = rng();
        let x = rpg.playerScore;
        let y = rpg.enemyScore;
        playerRoll.textContent = x
        enemyRoll.textContent = y
        winCondSlime()
    })

}

function winCondSlime() {
    if (rpg.playerScore <= rpg.enemyScore){
        content.textContent = rpg.deathText[0];
        button2.style.visibility = "hidden"
    } else {
        content.textContent = rpg.storyText[1];
        humanSelectButtonsAftSlime();
        showButtons();
    }
}


// DISPLAY FUNCTIONS

function hideScoreHealth() {
    playerRoll.style.visibility = "hidden";
    playerHealth.style.visibility = "hidden";
    enemyRoll.style.visibility = "hidden";
    enemyHealth.style.visibility = "hidden";
}

function showButtons() {
    button1.style.visibility = "visible";
    button2.style.visibility ="visible";
    button3.style.visibility = "visible";
}


//PAGE SELECT FUNCTIONS

function charSelectPage(){
    content.textContent = rpg.charText[0];
    charSelectButtons();
}

function humanPage(){
    chosenChar = 3;
    content.textContent = rpg.charText[1];
    humanSelectButtons()
}

function knightPage(){
    chosenChar = 1;
    content.textContent = rpg.charText[2];
    kmSelectButtons();
}

function magePage(){
    chosenChar = 2;
    content.textContent = rpg.charText[3];
    kmSelectButtons();
}

function fightSlimePage(){
    if (chosenChar === 0){
       content.textContent = rpg.storyText[0];
       fightPageThings()
    } else if (chosenChar === 1){
       content.textContent = rpg.storyText[1];
       fightPageThings()
    } else if(chosenChar === 2){
       content.textContent = rpg.storyText[2];
       fightPageThings()
    }
    
}
console.log(chosenChar);

function render(){
    pushCharSelectButtons ();
    pushText();
    pushPathSelectButtons();
    hideScoreHealth();
    charSelectPage();

}
render();
console.log(button1, button2, button3,);