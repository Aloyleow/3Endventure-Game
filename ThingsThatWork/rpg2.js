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


let rpg = {
    slimeFight: false,
    dragonFight: false,
    humanDeathbyChilling: false,
    trainingPU:false,
    trainingSU: false,
    trainingEat: false,
    chosenChar: "",
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
    rpg.storyText.push("WELL DONE human!!!, you practically ascended to dragon lord after getting dragon blood on your face.");
    rpg.storyText.push("Chonky lizard dieded....What you gonna do next ?");
    rpg.storyText.push("Train to kill!!");
    rpg.storyText.push("WOW chonky thihck muscles");
    rpg.storyText.push("1 quadrillion push up");
    rpg.storyText.push("1st plate...bruh......why this option thoo");
    rpg.storyText.push("errr weelll....you full ?");
    rpg.storyText.push("1 quadrillion sit ups");

    rpg.deathText.push("YOU DIED!!!! killed by a slime...lol...noob");
    rpg.deathText.push("YOU DIED!!!! obviously...dragon leh");
    rpg.deathText.push("YOU DIED !!!..off old age..Yawnzz");
    rpg.deathText.push("YOU DIED!!!! err.....you weak lor");
    rpg.deathText.push("YOU DIED!!!! yeaaaaaaa i mean thats alot of rice");

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
         "Eat a Quadrillion plate of ZAP CAI PENG with neker gen neker gen neker ling curry zi hai you ji dan"
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
    humanbutton.addEventListener("click", () => { humanPage(); rpg.chosenChar = "human";})
    knightbutton.addEventListener("click", () => {knightPage(); rpg.chosenChar = "knight";})
    magebutton.addEventListener("click", () => {magePage(); rpg.chosenChar = "mage";})
    showCharButtons()
    hidebottomButtons()
}

function humanSelectButtons() {
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[4];
    button1.addEventListener("click", fightSlimePage);
    button2.addEventListener("click", fightDragonPage);
    button3.addEventListener("click", () => {
        rpg.humanDeathbyChilling = true;
        deathPage()
    });
}

function kmSelectButtons() {
    button1.textContent = rpg.buttonsEffect.pathSelect[0];
    button2.textContent = rpg.buttonsEffect.pathSelect[1];
    button3.textContent = rpg.buttonsEffect.pathSelect[2];
    button1.addEventListener("click", fightSlimePage);
    button2.addEventListener("click", fightDragonPage);
    button3.addEventListener("click", trainGowPage);
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
    button2.textContent = rpg.buttonsEffect.pathSelect[3];
    button3.textContent = rpg.buttonsEffect.pathSelect[8];
}

function kmSelectButtonsAftDragon() {
    button1.textContent = rpg.buttonsEffect.pathSelect[6];
    button3.textContent = rpg.buttonsEffect.pathSelect[2];
    button3.addEventListener("click", trainGowPage);
}

function trainGowButtons() {
    button1.textContent = rpg.buttonsEffect.pathSelect[9];
    button2.textContent = rpg.buttonsEffect.pathSelect[10];
    button3.textContent = rpg.buttonsEffect.pathSelect[11];
    button1.addEventListener("click", () => {
        rpg.trainingPU = true;
        rpg.trainingSU = false;
        rpg.trainingEat = false;
        trainGowPage2();
    })
    button2.addEventListener("click", () => {
        rpg.trainingSU = true;
        rpg.trainingPU = false;
        rpg.trainingEat = false;
        trainGowPage2();
    })
    button3.addEventListener("click", () => {
        rpg.trainingEat = true;
        rpg.trainingPU = false;
        rpg.trainingSU = false;
        trainGowPage2();
    })
}

function fightPageThings() {
    playerScore = 0;
    enemyScore = 0;
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
        if (rpg.slimeFight === true){
            winCondSlime()
            rpg.slimeFight = false;
        } else if (rpg.dragonFight === true){
            winCondDragon()
            rpg.dragonFight = false;
        } else if (rpg.trainingPU === true){
            trainWinConPU()
            rpg.trainingPU = false;
        } else if (rpg.trainingSU === true){
            trainWinConSU()
            rpg.trainingSU = false;
        } else if (rpg.trainingEat === true){
            trainWinConEat()
            rpg.trainingEat = false;
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

function hideRollScore() {
    playerRoll.style.visibility = "hidden";
    enemyRoll.style.visibility = "hidden";
}

function showBottomButtons() {
    button1.style.visibility = "visible";
    button2.style.visibility ="visible";
    button3.style.visibility = "visible";
}

function showBottom2Buttons() {
    button1.style.visibility = "visible";
    button2.style.visibility ="hidden";
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
    hideCharButtons();
    showBottomButtons();
    content.textContent = rpg.charText[1];
    humanSelectButtons()

}

function knightPage(){
    hideCharButtons();
    showBottomButtons();
    content.textContent = rpg.charText[2];
    kmSelectButtons();   
}

function magePage(){
    hideCharButtons();
    showBottomButtons();
    content.textContent = rpg.charText[3];
    kmSelectButtons();  
}

function fightSlimePage(){
    rpg.slimeFight = true;
    fightPageThings();
    if (rpg.chosenChar === "human"){
       content.textContent = rpg.storyText[0];
    } else if (rpg.chosenChar === "knight"){
       content.textContent = rpg.storyText[1];
    } else if(rpg.chosenChar === "mage"){
       content.textContent = rpg.storyText[2];  
    }    
}

function winCondSlime() {
    if (rpg.chosenChar === "human"){
        if (rpg.playerScore <= rpg.enemyScore){
            content.textContent = rpg.deathText[0];
            button2.style.visibility = "hidden"
        } else {
            content.textContent = rpg.storyText[3];
            humanSelectButtonsAftSlime();
            showBottomButtons();
        }
    }
    if (rpg.chosenChar === "knight"){
        if (rpg.playerScore <= rpg.enemyScore){
            content.textContent = rpg.deathText[0];
            button2.style.visibility = "hidden"
        } else {
            content.textContent = rpg.storyText[3];
            kmSelectButtonsAftSlime();
            showBottomButtons();
        }
    }
    if (rpg.chosenChar === "mage"){
        if (rpg.playerScore <= rpg.enemyScore){
            content.textContent = rpg.deathText[0];
            button2.style.visibility = "hidden"
        } else {
            content.textContent = rpg.storyText[3];
            kmSelectButtonsAftSlime();
            showBottomButtons();
        }
    }
}

function fightDragonPage(){
    rpg.dragonFight = true;
    fightPageThings();
    if (rpg.chosenChar === "human"){
        content.textContent = rpg.storyText[4];
     } else if (rpg.chosenChar === "knight"){
        content.textContent = rpg.storyText[5];
     } else if(rpg.chosenChar === "mage"){
        content.textContent = rpg.storyText[6];
     }    
}

function winCondDragon(){
    if (rpg.chosenChar === "human"){
        if (rpg.playerScore !== 10){
            content.textContent = rpg.deathText[1];
            button2.style.visibility = "hidden"
        } else {
            content.textContent = rpg.storyText[7];
            humanSelectButtonsAftDragon();
            showBottomButtons();
        }
    }
    if (rpg.chosenChar === "knight"){
        if (rpg.playerScore <= rpg.enemyScore){
            content.textContent = rpg.deathText[1];
            button2.style.visibility = "hidden"
        } else {
            content.textContent = rpg.storyText[8];
            kmSelectButtonsAftDragon();
            showBottom2Buttons();
        }
    }
    if (rpg.chosenChar === "mage"){
        if (rpg.playerScore <= rpg.enemyScore){
            content.textContent = rpg.deathText[1];
            button2.style.visibility = "hidden"
        } else {
            content.textContent = rpg.storyText[8];
            kmSelectButtonsAftDragon();
            showBottom2Buttons();
        }
  
    }
}

function trainGowPage() {
    content.textContent = rpg.storyText[9];
    hideRollScore();
    trainGowButtons();
    showBottomButtons();

}

function trainGowPage2() {
    hideRollScore();
    if (rpg.trainingPU === true){
        content.textContent = rpg.storyText[11];
    } else if (rpg.trainingSU === true){
        content.textContent = rpg.storyText[14];
    } else if (rpg.trainingEat === true){
        content.textContent = rpg.storyText[12];
    }
    rpg.slimeFight = false
    rpg.dragonFight = false
    fightPageThings();
}

function trainWinConPU(){
    if (rpg.playerScore <= rpg.enemyScore) {
        content.textContent = rpg.deathText[3];
        button2.style.visibility = "hidden"
    } else {
        content.textContent = rpg.storyText[10];
    }
}

function trainWinConSU(){
    if (rpg.playerScore <= rpg.enemyScore){
        content.textContent = rpg.deathText[3];
        button2.style.visibility = "hidden"
    } else {
        content.textContent = rpg.storyText[10];   
    }
}

function trainWinConEat(){
    if (rpg.playerScore !== 10){
        content.textContent = rpg.deathText[4];
        button2.style.visibility = "hidden"
    } else {
        content.textContent = rpg.storyText[13];           
    }

}
    // if (rpg.trainingPU === true) {
    //     if (rpg.playerScore <= rpg.enemyScore){
    //         content.textContent = rpg.deathText[3];
    //         button2.style.visibility = "hidden"
    //     } else {
    //         content.textContent = rpg.storyText[10];
    //     }
    // }

    // if (rpg.trainingSU === true){
    //     if (rpg.playerScore <= rpg.enemyScore){
    //         content.textContent = rpg.deathText[3];
    //         button2.style.visibility = "hidden"
    //     } else {
    //         content.textContent = rpg.storyText[10];
            
    //     }
    // }
    // if (rpg.trainingEat === true){
    //     if (rpg.playerScore !== 10){
    //         content.textContent = rpg.deathText[4];
    //         button2.style.visibility = "hidden"
    //     } else {
    //         content.textContent = rpg.storyText[13];
          
    //     }
    // }
    



function deathPage() {
    if (rpg.humanDeathbyChilling === true){
        content.textContent = rpg.deathText[2];
        hidebottomButtons()
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
