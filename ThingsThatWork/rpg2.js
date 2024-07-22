//State
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const humanbutton =document.querySelector("#h");
const knightbutton = document.querySelector("#k");
const magebutton = document.querySelector("#m");

const content = document.querySelector("#content");

const playerRoll = document.querySelector(".playerNumber");
const enemyRoll = document.querySelector(".enemyNumber");

const playerHealth = document.querySelector("#playerHealth");
const enemyHealth = document.querySelector("#enemyHealth");

let chosenChar = "";
let fights = "";
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
    rpg.storyText.push("FIGHTTT!! FOR YOUR LIFEEEE");
    rpg.storyText.push("Slice those chonky thic legs");
    rpg.storyText.push("BANG! POW! , wait, no, tiu tiu tiu!!!");

    rpg.deathText.push("YOU DIED!!!! killed by a slime...lol...noob");
    rpg.deathText.push("YOU DIED!!!! obviously...dragon leh")
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

function charSelectButtons(){
    humanbutton.textContent = rpg.charSelect[0];
    knightbutton.textContent = rpg.charSelect[1];
    magebutton.textContent = rpg.charSelect[2];
    humanbutton.addEventListener("click", () => { humanPage(); chosenChar = "human";})
    knightbutton.addEventListener("click", () => {knightPage(); chosenChar = "knight";})
    magebutton.addEventListener("click", () => {magePage(); chosenChar = "mage";})
    showCharButtons()
    hidebottomButtons()
}



function humanSelectButtons() {
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[4];
    button1.addEventListener("click", fightSlimePage);
    button2.addEventListener("click", fightDragonPage);

}

function kmSelectButtons() {
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[2];
    button1.addEventListener("click", fightSlimePage);
    button2.addEventListener("click", fightDragonPage);
}

function humanSelectButtonsAftSlime() {
    button1.textContent = rpg.buttonsEffect.pathSelect[3];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[5];
}

function kmSelectButtonsAftSlime() {
    button1.textContent = rpg.buttonsEffect.pathSelect[6];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[2];
}

function humanSelectButtonsAftDragon() {
    button1.textContent = rpg.buttonsEffect.pathSelect[6];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[2];
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
        if (fights = "slime"){
            winCondSlime()
        }    
    })

}


// DISPLAY FUNCTIONS

function hideScoreHealth() {
    playerRoll.style.visibility = "hidden";
    playerHealth.style.visibility = "hidden";
    enemyRoll.style.visibility = "hidden";
    enemyHealth.style.visibility = "hidden";
}

function showBottomButtons() {
    button1.style.visibility = "visible";
    button2.style.visibility ="visible";
    button3.style.visibility = "visible";
}

function hidebottomButtons() {
    button1.style.visibility = "hidden";
    button2.style.visibility ="hidden";
    button3.style.visibility = "hidden";
}

function showCharButtons() {
    humanbutton.style.visibility = "visible";
    knightbutton.style.visibility ="visible";
    magebutton.style.visibility = "visible";
}

function hideCharButtons() {
    humanbutton.style.visibility = "hidden";
    knightbutton.style.visibility ="hidden";
    magebutton.style.visibility = "hidden";
}

//PAGE SELECT FUNCTIONS

function charSelectPage(){
    content.textContent = rpg.charText[0];
    charSelectButtons();
}

function humanPage(){
    hideCharButtons()
    showBottomButtons()
    content.textContent = rpg.charText[1];
    humanSelectButtons()

}

function knightPage(){
    hideCharButtons()
    showBottomButtons()
    content.textContent = rpg.charText[2];
    kmSelectButtons();   
}

function magePage(){
    hideCharButtons()
    showBottomButtons()
    content.textContent = rpg.charText[3];
    kmSelectButtons();  
}

function fightSlimePage(){
    fights = "slime";
    fightPageThings();
    if (chosenChar === "human"){
       content.textContent = rpg.storyText[0];
    } else if (chosenChar === "knight"){
       content.textContent = rpg.storyText[1];
    } else if(chosenChar === "mage"){
       content.textContent = rpg.storyText[2];
    }    
}

function winCondSlime() {
    if (chosenChar = "human" && rpg.playerScore <= rpg.enemyScore){
        content.textContent = rpg.deathText[0];
        button2.style.visibility = "hidden"
    } 
    if (chosenChar = "human" && rpg.playerScore > rpg.enemyScore) {
        content.textContent = rpg.storyText[3];
        humanSelectButtonsAftSlime();
        showBottomButtons();
    }
    if (chosenChar = "knight" && rpg.playerScore <= rpg.enemyScore){
        content.textContent = rpg.deathText[0];
        button2.style.visibility = "hidden"
    } 
    if (chosenChar = "knight" && rpg.playerScore > rpg.enemyScore) {
        content.textContent = rpg.storyText[3];
        kmSelectButtonsAftSlime()
        showBottomButtons();
    }
    if (chosenChar = "mage" && rpg.playerScore <= rpg.enemyScore){
        content.textContent = rpg.deathText[0];
        button2.style.visibility = "hidden"
    } 
    if (chosenChar = "mage" && rpg.playerScore > rpg.enemyScore) {
        content.textContent = rpg.storyText[3];
        kmSelectButtonsAftSlime()
        showBottomButtons();
    }
    

}

function fightDragonPage(){
    fights = "dragon";
    fightPageThings();
    if (chosenChar === "human"){
        content.textContent = rpg.storyText[4];
     } else if (chosenChar === "knight"){
        content.textContent = rpg.storyText[5];
     } else if(chosenChar === "mage"){
        content.textContent = rpg.storyText[6];
     }    
}

function winCondDragon(){
    if (chosenChar = "human" && rpg.playerScore !== 10){
        content.textContent = rpg.deathText[1];
        button2.style.visibility = "hidden"
    } else if (chosenChar = "human" && rpg.playerScore > rpg.enemyScore) {
        content.textContent = rpg.storyText[3];
        humanSelectButtonsAftSlime();
        showBottomButtons();
    }
    if (chosenChar = "knight" && rpg.playerScore <= rpg.enemyScore){
        content.textContent = rpg.deathText[0];
        button2.style.visibility = "hidden"
    } else if (chosenChar = "knight" && rpg.playerScore > rpg.enemyScore) {
        content.textContent = rpg.storyText[3];
        kmSelectButtonsAftSlime()
        showBottomButtons();
    }
    if (chosenChar = "mage" && rpg.playerScore <= rpg.enemyScore){
        content.textContent = rpg.deathText[0];
        button2.style.visibility = "hidden"
    } else if (chosenChar = "mage" && rpg.playerScore > rpg.enemyScore) {
        content.textContent = rpg.storyText[3];
        kmSelectButtonsAftSlime()
        showBottomButtons();
    }
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
