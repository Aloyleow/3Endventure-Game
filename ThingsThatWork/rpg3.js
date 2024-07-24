const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const humanbutton =document.querySelector("#h");
const knightbutton = document.querySelector("#k");
const magebutton = document.querySelector("#m");

const content = document.querySelector("#content");

const playerRollDisplay = document.querySelector(".playerNumber");
const enemyRollDisplay = document.querySelector(".enemyNumber");

const playerHealthDisplay = document.querySelector("#playerHealth");
const enemyHealthDisplay = document.querySelector("#enemyHealth");

//================================================Game State================================================
let rpg = {
    chosenChar: "",

    secondFight: false,
    thirdFight: false,
    bossFight: false,

    slimeFight: false,
    dragonFight: false,
    humanDeathbyChilling: false,
    trainingPU:false,
    trainingSU: false,
    trainingEat: false,
    
    charSelect: [],
    charText:[],
    storyText:[],
    deathText:[],
    buttonsEffect: {
        pathSelect: [],
    },

}

let rpgfightSystem = {
    numberRoll: [1,2,3,4,5,6,7,8,9,10],
    playerScore: [],
    enemyScore: [],
    
    health: {
        anomalyHealth: 50,
        playerHealthHuman: 35,
        playerHealthDragonLord: 50,
        playerHealthaftTrain: 50,
        playerHealthGOW: 100,
    } 
}
function rng(){
    let y = Math.random();
    if (y < 0.1) {
        return rpgfightSystem.numberRoll[0]; 
    } else if (y < 0.2) {
        return rpgfightSystem.numberRoll[1];
    } else if (y < 0.3) {
        return rpgfightSystem.numberRoll[2];
    } else if (y < 0.4) {
        return rpgfightSystem.numberRoll[3];
    } else if (y < 0.5) {
        return rpgfightSystem.numberRoll[4];
    } else if (y < 0.6) {
        return rpgfightSystem.numberRoll[5];
    } else if (y < 0.7) {
        return rpgfightSystem.numberRoll[6];
    } else if (y < 0.8) {
        return rpgfightSystem.numberRoll[7];
    } else if (y < 0.9) {
        return rpgfightSystem.numberRoll[8];
    } else if (y <= 1) {
        return rpgfightSystem.numberRoll[9];
    }   
}

function pushCharText(){
    rpg.charText.push("To be or not to pee, so who you wan to bee");
    rpg.charText.push("HUMAN !!!! What do you wan to do ?");
    rpg.charText.push("KNIGHT !!! what you wanna slay ?");
    rpg.charText.push("MAGE !!! tiu tiu tiu...")    
}

function pushCharTextButtons(){
    rpg.charSelect.push(
        "Human",
        "Knight!",
        "Mage"
    )
}

function pushStoryContent(){    
    rpg.storyText.push("0Squash Squash kill that thing");
    rpg.storyText.push("1Slash Slaush ? Wad de Slush");
    rpg.storyText.push("2no mana or banana ?");
    rpg.storyText.push("3just a slime....chill..what you gonna do next ?");
    rpg.storyText.push("4slimey slimey slashed!! what you gonna do next ?");
    rpg.storyText.push("5VAPOURISED!! what you gonna do next ?");
    rpg.storyText.push("6FIGHTTT!! FOR YOUR LIFEEEE");
    rpg.storyText.push("7Slice those chonky thic legs");
    rpg.storyText.push("8BANG! POW! , wait, no, tiu tiu tiu!!!");
    rpg.storyText.push("9WELL DONE human!!!, you practically ascended to dragon lord after getting dragon blood on your face.");
    rpg.storyText.push("10Chonky lizard dieded....What you gonna do next ?");
    rpg.storyText.push("11Train to kill!!");
    rpg.storyText.push("12WOW chonky thihck muscles");
    rpg.storyText.push("1 quadrillion push up13");
    rpg.storyText.push("1st plate...bruh......why this option thoo");
    rpg.storyText.push("errr weelll....you full ?");
    rpg.storyText.push("1 quadrillion sit ups");

    rpg.deathText.push("0YOU DIED!!!! killed by a slime...lol...noob");
    rpg.deathText.push("1YOU DIED!!!! obviously...dragon leh");
    rpg.deathText.push("2YOU DIED!!!! your next journey will be through the dragons other end =)")
    rpg.deathText.push("3YOU DIED !!!..off old age..Yawnzz");
    rpg.deathText.push("YOU DIED!!!! err.....you weak lor");
    rpg.deathText.push("YOU DIED!!!! yeaaaaaaa i mean thats alot of rice");

}

function pushPathSelectButtons() {
    rpg.buttonsEffect.pathSelect.push(
        "0Fight a Slimeeee",
        "1Fight a Dragon!!!",
        "2Train with GOW!",
        "3Fight the GOW ?",
        "4Chill...",
        "5Chill lahh....",
        "6Fight Anomaly",
        "7Roll",
        "8Chill lahh...with a teh ping",
        "9Do a Quadrillion push ups!!",
        "10Do a Quadrillion sit ups!!",
        "11Eat a Quadrillion plate of ZAP CAI PENG with neker gen neker gen neker ling curry zi hai you ji dan",
    )
}

function fightSystem(){
    button2.addEventListener("click", () =>{
        rpgfightSystem.playerScore = rng();
        rpgfightSystem.enemyScore = rng();
        playerRollDisplay.textContent = rpgfightSystem.playerScore;
        enemyRollDisplay.textContent = rpgfightSystem.enemyScore;
        if (rpg.slimeFight === true){
            slimeBossWinCond()
        } else if (rpg.dragonFight === true){
            dragonBossWinCond()
        }
               
    })
}

function humanPageButtons(){
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[4];
    button1.addEventListener("click", () => {rpg.slimeFight = true; slimeBossFightPage()})
    button2.addEventListener("click", () => {rpg.dragonFight =true; dragonBossFightPage()})
    button3.addEventListener("click", instantDeath)
}

function kmPageButtons(){
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[2];
    button1.addEventListener("click", () => {rpg.slimeFight = true; slimeBossFightPage()})
    button2.addEventListener("click", () => {rpg.dragonFight =true; dragonBossFightPage()})
    button3.addEventListener("click", trainWithGowButtons)
}

function trainWithGowButtons(){
    content.textContent = rpg.storyText[11]
    button1.textContent = rpg.buttonsEffect.pathSelect[9];
    button2.textContent = rpg.buttonsEffect.pathSelect[10];
    button3.textContent = rpg.buttonsEffect.pathSelect[11];
    button1.addEventListener("click", () => {
        rpg.trainingPU = true;
        rpg.slimeFight = false;
        rpg.dragonFight = false; 
        trainWithGowPage()
    } )

}
//================================================1st page Character Select================================================

function charSelectButtons(){
    hidebottomButtons()
    hideScoreAndHealth()
    content.textContent = rpg.charText[0]
    humanbutton.textContent = rpg.charSelect[0];
    knightbutton.textContent = rpg.charSelect[1];
    magebutton.textContent = rpg.charSelect[2];
    humanbutton.addEventListener("click", () => {rpg.chosenChar = "human"; afterCharSelectPage();})
    knightbutton.addEventListener("click", () => {rpg.chosenChar = "knight"; afterCharSelectPage();})
    magebutton.addEventListener("click", () => {rpg.chosenChar = "mage"; afterCharSelectPage();})
    
}



//================================================2nd page Choose your way================================================

function afterCharSelectPage(){
    hideCharSelectButtons();
    showBottomButtons();
    if (rpg.chosenChar === "human"){
        content.textContent = rpg.charText[1];
        humanPageButtons();
    } else if (rpg.chosenChar === "knight"){
        content.textContent = rpg.charText[2];
        kmPageButtons()
    } else if (rpg.chosenChar === "mage"){
        content.textContent = rpg.charText[3];
        kmPageButtons()
    }
}

//================================================fights and divergence starts================================================
//set truths
//

function slimeBossFightPage(){
    if (rpg.slimeFight === true && rpg.trainingPU === false){
        onlyShowRollButton()
        showScore()
        if (rpg.chosenChar === "human"){
            content.textContent = rpg.storyText[0];
        
        } else if (rpg.chosenChar === "knight"){
            content.textContent = rpg.storyText[1];
        
        } else if (rpg.chosenChar === "mage"){
            content.textContent = rpg.storyText[2];    
        }
        fightSystem()
        console.log("WRTONG!")
    }  
}
// remember false slime
function slimeBossWinCond(){
    if (rpg.chosenChar === "human"){
        if (rpgfightSystem.playerScore > rpgfightSystem.enemyScore) {
            content.textContent = rpg.storyText[3];
        } else {
            content.textContent = rpg.deathText[0];
        }        
    } else if (rpg.chosenChar === "knight"){
        if (rpgfightSystem.playerScore > rpgfightSystem.enemyScore) {
            content.textContent = rpg.storyText[4];
        } else {
            content.textContent = rpg.deathText[0];
        }             
    } else if (rpg.chosenChar === "mage"){
        if (rpgfightSystem.playerScore > rpgfightSystem.enemyScore) {
            content.textContent = rpg.storyText[5];
        } else {
            content.textContent = rpg.deathText[0];
        }     
    }

}
// remember set false
function dragonBossFightPage(){
    if (rpg.dragonFight === true){
        onlyShowRollButton();
        showScore();
        if (rpg.chosenChar === "human") {
            content.textContent = rpg.storyText[6];

        } else if (rpg.chosenChar === "knight") {
            content.textContent = rpg.storyText[7];

        } else if (rpg.chosenChar === "mage") {
            content.textContent = rpg.storyText[8];
        }
        fightSystem();
    }
}
    

function dragonBossWinCond(){
    if (rpg.chosenChar === "human"){
        if (rpgfightSystem.playerScore === 10) {
            content.textContent = rpg.storyText[9];
        } else {
            content.textContent = rpg.deathText[1];
        }        
    } else if (rpg.chosenChar === "knight"){
        if (rpgfightSystem.playerScore > rpgfightSystem.enemyScore) {
            content.textContent = rpg.storyText[10];
        } else {
            content.textContent = rpg.deathText[2];
        }             
    } else if (rpg.chosenChar === "mage"){
        if (rpgfightSystem.playerScore > rpgfightSystem.enemyScore) {
            content.textContent = rpg.storyText[10];
        } else {
            content.textContent = rpg.deathText[2];
        }
    }
}

//================================================ training page after choosing train type================================================
//slime fight and maybe dragon fights becomes true cause considered 3rd page so have to off it
function trainWithGowPage(){
    if (rpg.trainingPU === true){
        content.textContent = rpg.storyText[13]
    }
}

//================================================ Buttons Visibility================================================
function hideScoreAndHealth() {
    playerRollDisplay.style.visibility = "hidden";
    playerHealthDisplay.style.visibility = "hidden";
    enemyRollDisplay.style.visibility = "hidden";
    enemyHealthDisplay.style.visibility = "hidden";
}

function showScore() {
    playerRollDisplay.style.visibility = "visible";
    enemyRollDisplay.style.visibility = "visible";
}

function hideScore() {
    playerRollDisplay.style.visibility = "hidden";
    enemyRollDisplay.style.visibility = "hidden";
}

function hideCharSelectButtons() {
    humanbutton.style.visibility = "hidden";
    knightbutton.style.visibility = "hidden";
    magebutton.style.visibility = "hidden";
    
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

function onlyShowRollButton() {
    button2.textContent = rpg.buttonsEffect.pathSelect[7];
    button1.style.visibility = "hidden";
    button2.style.visibility ="visible";
    button3.style.visibility = "hidden";
}

//================================================instant death functions================================================
function instantDeath(){
    hidebottomButtons()
    content.textContent = rpg.deathText[3];
}

function render(){

    pushCharText()
    pushCharTextButtons()

    pushStoryContent()
    pushPathSelectButtons()

    charSelectButtons()

}

render()