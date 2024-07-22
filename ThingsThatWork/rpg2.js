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
    buttonsEffect: {
        charSelect: [],
        trainingSelect: [],
        pathSelect: [],
        roll: [],
    },
    rollScore: [],
    health: {
        anomalyHealth: 50,
        playerHealthHuman: 35,
        playerHealthDragonLord: 50,
        playerHealthaftTrain: 50,
        playerHealthGOW: 100, 
    },

}
function pushText(){
    rpg.storyText.push("To be or not to pee, so who you wan to bee");
    rpg.storyText.push("HUMAN !!!! What do you wan to do ?");
}

function pushPathSelectButtons() {
    rpg.buttonsEffect.pathSelect.push(
        "Fight a Slimeeee",
        "Fight a Dragon!!!",
        "Train with GOW!",
        "Chill..."
    )
}

function pushCharSelectButtons(){  
    rpg.buttonsEffect.charSelect.push(
        "Human",
        "Knight!",
        "Mage"
    )
    
}
function charSelectButtons() {
    button1.textContent = rpg.buttonsEffect.charSelect[0];
    button2.textContent = rpg.buttonsEffect.charSelect[1];
    button3.textContent = rpg.buttonsEffect.charSelect[2];
}
function hideScoreHealth() {
    playerRoll.style.visibility = "hidden";
    playerHealth.style.visibility = "hidden";
    enemyRoll.style.visibility = "hidden";
    enemyHealth.style.visibility = "hidden";
}

function charSelectPage(){
    content.textContent = rpg.storyText[0];
    charSelectButtons();
}

function humanSelectPage(){

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