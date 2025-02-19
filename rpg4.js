const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const humanbutton =document.querySelector("#h");
const knightbutton = document.querySelector("#k");
const magebutton = document.querySelector("#m");

const header =document.querySelector("#header");
const content = document.querySelector("#content");
const playerimage = document.querySelector("#playerimage");
const enemyimage = document.querySelector("#enemyimage");

const playerRollDisplay = document.querySelector(".playerNumber");
const enemyRollDisplay = document.querySelector(".enemyNumber");

const playerHealthDisplay = document.querySelector("#playerHealth");
const enemyHealthDisplay = document.querySelector("#enemyHealth");

//================================================Game State================================================
let rpg = {
    chosenChar: "",

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



//================================================ Push Text Functions ================================================
function pushCharText(){
    rpg.charText.push("An anomaly has taken over the world, you are the only one left on earth...so to be or not to pee, so who you wan to bee ?");
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
    rpg.storyText.push("Squash Squash kill that thing!");
    rpg.storyText.push("Slash Slaush ? Wad de Slush");
    rpg.storyText.push("No mana or banana ?");
    rpg.storyText.push("Slimey puddle.....FIGHT THE ANOMALY!!");
    rpg.storyText.push("Slimey slimey slashed!! FIGHT THE ANOMALY!!");
    rpg.storyText.push("VAPOURISED!! FIGHT THE ANOMALY!!");
    rpg.storyText.push("FIGHTTT!! FOR YOUR LIFEEEE");
    rpg.storyText.push("Slice those chonky thic legs");
    rpg.storyText.push("BANG! POW! , wait, no, tiu tiu tiu!!!");
    rpg.storyText.push("You killed the Anomaly!!! Well done!!");
    rpg.storyText.push("Chonky lizard dieded....FIGHT THE ANOMALY!!");
    rpg.storyText.push("Train to kill!!");
    rpg.storyText.push("WOW chonky thihck muscles...FIGHT THE ANOMALY!!");
    rpg.storyText.push("1 quadrillion push up");
    rpg.storyText.push("1 quadrillion plate...bruh......why this option thoo");
    rpg.storyText.push("errr weelll....you full ?");
    rpg.storyText.push("1 quadrillion sit ups");
    rpg.storyText.push("HOW ARE YOU STILL HUNGRY ?? you practically ate up the anomaly!! congrats ?");
    rpg.storyText.push("ROLLL!!!")

    rpg.deathText.push("YOU DIED!!!! killed by a slime...lol...noob");
    rpg.deathText.push("YOU DIED!!!! obviously...dragon leh");
    rpg.deathText.push("YOU DIED!!!! your next journey will be through the dragons other end =)")
    rpg.deathText.push("YOU DIED !!!..off old age..Yawnzz");
    rpg.deathText.push("YOU DIED!!!! your muscle spasm until you died.......");
    rpg.deathText.push("YOU DIED!!!! yeaaaaaaa i mean thats alot of rice");
    rpg.deathText.push("YOU DIED!!!! who's gonna save the world now ??!! ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

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
        "Roll",
        "Chill lahh...with a teh ping",
        "Do a Quadrillion push ups!!",
        "Do a Quadrillion sit ups!!",
        "Eat a Quadrillion plate of ZAP CAI PENG with neker gen neker gen neker ling curry zi hai you ji dan",
        "Fight The Anomaly!!!"
    )
}

//================================================Fight System================================================

let rpgfightSystem = {
    numberRoll: [1,2,3,4,5,6,7,8,9,10],
    playerScore: [],
    enemyScore: [],
    
    health: {
        anomalyHealth: 50,
        playerHealth: 45,
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

function fightSystemSet(){
    showScore()
    rpgfightSystem.playerScore = rng();
    rpgfightSystem.enemyScore = rng();
    playerRollDisplay.textContent = rpgfightSystem.playerScore;
    enemyRollDisplay.textContent = rpgfightSystem.enemyScore;
    if (rpg.slimeFight === true){
        slimeBossWinCond()
    } else if (rpg.dragonFight === true){
        dragonBossWinCond()
    } else{
        trainWinCond()
    }   
    
}
function fightSystem(){
    removeKmPageButtons();
    button2.addEventListener("click", fightSystemSet);               
}

//================================================Buttons================================================

function humanPageButtons(){
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[4];
    button1.addEventListener("click", slimeBossFightPage, {once : true});
    button2.addEventListener("click", dragonBossFightPage, {once : true});
    button3.addEventListener("click", instantDeath);
}

function kmPageButtons(){
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[2];
    button1.addEventListener("click", slimeBossFightPage);
    button2.addEventListener("click", dragonBossFightPage);
    button3.addEventListener("click", trainWithGowButtons);
}

function removeKmPageButtons(){  
    button1.removeEventListener("click", slimeBossFightPage);
    button2.removeEventListener("click", dragonBossFightPage);
    button3.removeEventListener("click", instantDeath);
}

function trainWithGowButtons(){  
    removeKmPageButtons();
    enemyimage.src = "Images/Gow.png"
    enemyimage.alt = "Gow"
    content.textContent = rpg.storyText[11]
    button1.textContent = rpg.buttonsEffect.pathSelect[9];
    button2.textContent = rpg.buttonsEffect.pathSelect[10];
    button3.textContent = rpg.buttonsEffect.pathSelect[11];

    button1.addEventListener("click", trainPuPage);
    button2.addEventListener("click", trainSuPage);
    button3.addEventListener("click", trainEatPage);
}

function removetrainWithGowButtons(){
    button1.removeEventListener("click", trainPuPage);
    button2.removeEventListener("click", trainSuPage);
    button3.removeEventListener("click", trainEatPage);
}

function removeButtonsforAnomaly(){
    button2.removeEventListener("click", dragonBossFightPage);
    button2.removeEventListener("click", fightSystemSet);
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
        playerimage.src = "Images/human.png"
        playerimage.alt = "human"
        header.textContent = rpg.charSelect[0];
        content.textContent = rpg.charText[1];
        humanPageButtons();
    } else if (rpg.chosenChar === "knight"){
        playerimage.src = "Images/Knight.png"
        playerimage.alt = "Knight"
        header.textContent = rpg.charSelect[1];
        content.textContent = rpg.charText[2];
        kmPageButtons()
    } else if (rpg.chosenChar === "mage"){
        playerimage.src = "Images/mage.png"
        playerimage.alt = "mage"
        header.textContent = rpg.charSelect[2];
        content.textContent = rpg.charText[3];
        kmPageButtons()
    }
}

//================================================fights================================================

function slimeBossFightPage(){
    rpg.slimeFight = true;
    enemyimage.src = "Images/slime.png"
    enemyimage.alt = "slime"
    onlyShowRollButton()
    if (rpg.chosenChar === "human"){
        content.textContent = rpg.storyText[0];
    
    } else if (rpg.chosenChar === "knight"){
        content.textContent = rpg.storyText[1];
    
    } else if (rpg.chosenChar === "mage"){
        content.textContent = rpg.storyText[2];    
    }
    fightSystem()
          
}
// remember false slime
function slimeBossWinCond(){
    removeKmPageButtons();
    if (rpg.chosenChar === "human"){
        if (rpgfightSystem.playerScore > rpgfightSystem.enemyScore) {
            content.textContent = rpg.storyText[3];
            anomalyFightPage()
            enemyimage.src = "Images/slimedead.png"
            enemyimage.alt = "slimedead"           
        } else {
            content.textContent = rpg.deathText[0];
            replayButton();
            removeKmPageButtons();
            playerimage.src = "Images/humandead.png"
            playerimage.alt = "humandead"
        }        
    } else if (rpg.chosenChar === "knight"){
        if (rpgfightSystem.playerScore > rpgfightSystem.enemyScore) {
            content.textContent = rpg.storyText[4];
            anomalyFightPage()
            enemyimage.src = "Images/slimedead.png"
            enemyimage.alt = "slimedead"            
        } else {
            content.textContent = rpg.deathText[0];
            replayButton();
            playerimage.src = "Images/knightdead.png"
            playerimage.alt = "knightdead"
        }             
    } else if (rpg.chosenChar === "mage"){
        if (rpgfightSystem.playerScore > rpgfightSystem.enemyScore) {
            content.textContent = rpg.storyText[5];
            anomalyFightPage()
            enemyimage.src = "Images/slimedead.png"
            enemyimage.alt = "slimedead"           
        } else {
            content.textContent = rpg.deathText[0];
            replayButton();
            playerimage.src = "Images/magedead.png"
            playerimage.alt = "magedead"
        }     
    }

}
// remember set false
function dragonBossFightPage(){ 
    enemyimage.src = "Images/evildragon.png"
    enemyimage.alt = "evildragon"
    rpg.dragonFight =true
    onlyShowRollButton();
    hideScore()
    if (rpg.chosenChar === "human") {
        content.textContent = rpg.storyText[6];

    } else if (rpg.chosenChar === "knight") {
        content.textContent = rpg.storyText[7];

    } else if (rpg.chosenChar === "mage") {
        content.textContent = rpg.storyText[8];
    }
    fightSystem();
}   
    

function dragonBossWinCond(){
    if (rpg.chosenChar === "human"){
        if (rpgfightSystem.playerScore === 10) {
            content.textContent = rpg.storyText[10];
            anomalyFightPage();
            enemyimage.src = "Images/evildragondead.png"
            enemyimage.alt = "evildragondead"    
        } else {
            content.textContent = rpg.deathText[1];
            replayButton();
            playerimage.src = "Images/humandead.png"
            playerimage.alt = "humandead"
        }        
    } else if (rpg.chosenChar === "knight"){
        if (rpgfightSystem.playerScore > rpgfightSystem.enemyScore) {
            content.textContent = rpg.storyText[10];
            anomalyFightPage();
            enemyimage.src = "Images/evildragondead.png"
            enemyimage.alt = "evildragondead"
        } else {
            content.textContent = rpg.deathText[2];
            replayButton()
            playerimage.src = "Images/knightdead.png"
            playerimage.alt = "knightdead"
        }             
    } else if (rpg.chosenChar === "mage"){
        if (rpgfightSystem.playerScore > rpgfightSystem.enemyScore) {
            content.textContent = rpg.storyText[10];
            anomalyFightPage()
            enemyimage.src = "Images/evildragondead.png"
            enemyimage.alt = "evildragondead"         
        } else {
            content.textContent = rpg.deathText[2];
            replayButton()
            playerimage.src = "Images/magedead.png"
            playerimage.alt = "magedead"
        }
    }
}

//=======anomalyfunctions======

function anomalyFightPage(){
    removeButtonsforAnomaly();
    anomalyButtonDisplay();
    button2.textContent = rpg.buttonsEffect.pathSelect[12];
    button2.addEventListener("click", () =>{
        enemyimage.src = "Images/Anomaly.png";
        enemyimage.alt = "Anomaly";
        hideScore()
        playerHealthDisplay.textContent = rpgfightSystem.health.playerHealth
        enemyHealthDisplay.textContent = rpgfightSystem.health.anomalyHealth
        playerHealthDisplay.style.visibility = "visible";
        enemyHealthDisplay.style.visibility = "visible";
        content.textContent = rpg.storyText[18]
        button2.textContent = rpg.buttonsEffect.pathSelect[7];
        
        anomalyfightSystem()
       })
       
}

function anomalyfightSystem(){
    button2.addEventListener("click", () =>{
        showScore()
        rpgfightSystem.playerScore = rng()
        rpgfightSystem.enemyScore = rng()
        playerRollDisplay.textContent = rpgfightSystem.playerScore;
        enemyRollDisplay.textContent = rpgfightSystem.enemyScore;
        rpgfightSystem.health.anomalyHealth = rpgfightSystem.health.anomalyHealth - rpgfightSystem.playerScore
        rpgfightSystem.health.playerHealth = rpgfightSystem.health.playerHealth - rpgfightSystem.enemyScore

        if (rpgfightSystem.health.anomalyHealth <= 0 && rpgfightSystem.health.anomalyHealth <= rpgfightSystem.health.playerHealth){
            replayButtonWin()
            hideScoreAndHealth()
            content.textContent = rpg.storyText[9];
        } else if (rpgfightSystem.health.playerHealth <= 0 && rpgfightSystem.health.playerHealth <= rpgfightSystem.health.anomalyHealth){
            replayButton()
            hideScoreAndHealth()
            content.textContent = rpg.deathText[6];
            chardeathimage()
        }
        
    }, {once: true});
}

//================================================ training page after choosing train type================================================

function trainPuPage(){
    rpg.trainingPU = true;
    removetrainWithGowButtons()
    onlyShowRollButton();
    content.textContent = rpg.storyText[13]
    fightSystem();
}
function trainSuPage(){
    rpg.trainingSU = true;
    removetrainWithGowButtons()
    onlyShowRollButton();
    content.textContent = rpg.storyText[16]
    fightSystem();
}

function trainEatPage(){
    rpg.trainingEat = true;
    removetrainWithGowButtons()
    onlyShowRollButton();
    content.textContent = rpg.storyText[14]
    fightSystem();
}

function trainWinCond(){
    if (rpg.trainingPU === true){
        if(rpgfightSystem.playerScore > rpgfightSystem.enemyScore){
            content.textContent = rpg.storyText[12]
            anomalyFightPage()
            
        }else{
            content.textContent = rpg.deathText[4];
            replayButton()
            chardeathimage()
        }
    } else if (rpg.trainingSU === true){
        if(rpgfightSystem.playerScore > rpgfightSystem.enemyScore){
            content.textContent = rpg.storyText[12]
            anomalyFightPage()
            
        }else{
            content.textContent = rpg.deathText[4];
            replayButton()
            chardeathimage()
            
        }
    } else if (rpg.trainingEat === true){
        if(rpgfightSystem.playerScore === 10){
            content.textContent = rpg.storyText[15]
            replayButtonWinByEating()
            
        }else{
            content.textContent = rpg.deathText[5];
            replayButton()
            chardeathimage()
        }
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

function anomalyButtonDisplay(){
    button1.style.visibility = "hidden";
    button2.style.visibility ="visible";
    button3.style.visibility = "hidden";
}

//================================================Replay Buttons================================================

function replayButtonWin(){
    enemyimage.src = "Images/Anomalydead.png"
    enemyimage.alt = "Anomalydead"
    hidebottomButtons()
    knightbutton.style.visibility ="visible"
    knightbutton.textContent = "Time for Lunch ?"
    knightbutton.addEventListener("click", () => {history.go(0)})
}

function replayButton(){
    hidebottomButtons()
    knightbutton.style.visibility ="visible"
    knightbutton.textContent = "try again ~~~"
    knightbutton.addEventListener("click", () => {history.go(0)})
}

function replayButtonWinByEating(){
    button2.textContent = rpg.buttonsEffect.pathSelect[12];
    button2.addEventListener("click", () => {
        enemyimage.src = "Images/blank.png"
        enemyimage.alt = "blankfiller"
        hideScore()
        removeButtonsforAnomaly();
        hidebottomButtons();
        knightbutton.style.visibility = "visible";
        knightbutton.textContent = "Time for Lunch ?";
        knightbutton.addEventListener("click", () => { history.go(0) });
        content.textContent = rpg.storyText[17];    
    })
    
}

//================================================death functions================================================
function chardeathimage() {
    if (rpg.chosenChar === "human"){        
        playerimage.src = "Images/humandead.png"
        playerimage.alt = "humandead"
    }else if (rpg.chosenChar === "knight"){
        playerimage.src = "Images/knightdead.png"
        playerimage.alt = "knightdead"
    }else if (rpg.chosenChar === "mage"){
        playerimage.src = "Images/magedead.png"
        playerimage.alt = "magedead"
    }
}

function instantDeath(){
    content.textContent = rpg.deathText[3];
    replayButton();
    playerimage.src = "Images/humanchill.png"
    playerimage.alt = "humanchill"
}

function render(){

    pushCharText();
    pushCharTextButtons();

    pushStoryContent();
    pushPathSelectButtons();

    charSelectButtons();

}

render();