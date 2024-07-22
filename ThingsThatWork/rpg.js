//=====================GAME STATE / VARIABLES============================

// after clicking buttons, content and button text will change 
// 1st variable what page ? or what option chosen ? tag a number of the path chosen in an array []
// 2nd variable

const health = {
    anomalyHealth: 50,
    playerHealthHuman: 35,
    playerHealthDragonLord: 50,
    playerHealthaftTrain: 50,
    playerHealthGOW: 100,
}
let playerScore ;
let enemyScore ;
const numberRoll = [1,2,3,4,5,6,7,8,9,10];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const content = document.querySelector("#content");

const playerRoll = document.querySelector(".playerNumber");
const enemyRoll = document.querySelector(".enemyNumber");

const playerHealth = document.querySelector("#playerHealth");
const enemyHealth = document.querySelector("#enemyHealth")



console.log(playerRoll, enemyRoll);
console.log(button1, button2, button3);
console.log(playerHealth,enemyHealth);
//PAGE 1

//RNG funcs

function rng(){
    let y = Math.random();
    if (y < 0.1) {
        return numberRoll[0]; 
    } else if (y < 0.2) {
        return numberRoll[1];
    } else if (y < 0.3) {
        return numberRoll[2];
    } else if (y < 0.4) {
        return numberRoll[3];
    } else if (y < 0.5) {
        return numberRoll[4];
    } else if (y < 0.6) {
        return numberRoll[5];
    } else if (y < 0.7) {
        return numberRoll[6];
    } else if (y < 0.8) {
        return numberRoll[7];
    } else if (y < 0.9) {
        return numberRoll[8];
    } else if (y <= 1) {
        return numberRoll[9];
    }   
}

function showRoll(){
    playerRoll.style.visibility = "visible";
    enemyRoll.style.visibility = "visible";
}
function showRollPlayer(){
    playerRoll.style.visibility = "visible";
    enemyRoll.style.visibility = "hidden";
}
function showHealth(){
    playerHealth.style.visibility ="visible"
    enemyHealth.style.visibility ="visible"
}

function hideHealth(){
    playerHealth.style.visibility ="hidden"
    enemyHealth.style.visibility ="hidden"
}

function hideRoll(){
    playerRoll.style.visibility = "hidden";
    enemyRoll.style.visibility = "hidden";
}

function rollScore(){
    playerScore = rng();
    enemyScore = rng();
    playerRoll.textContent = playerScore;
    enemyRoll.textContent = enemyScore;

}
function rollScoreAnomaly(){
    playerScore = rng();
    enemyScore = rng();
    playerRoll.textContent = playerScore;
    enemyRoll.textContent = enemyScore;
    health.playerHealthHuman = health.playerHealthHuman - enemyScore
    health.anomalyHealth = health.anomalyHealth - enemyScore

}

//change of button contents 
function changeTextButton(){
    button1.textContent = "Human";
    button2.textContent = "Knight";
    button3.textContent = "Mage" ;
}

function changeTextButtonHuman(){
    button1.textContent = "Fight a Slime";
    button2.textContent = "Fight a Dragon!";
    button3.textContent = "Chill";
}

function changeTextButtonHumanSlime(){
    button3.style.visibility = "visible";
    button1.style.visibility = "visible";
    button1.textContent = "Fight the GOW";
    button2.textContent = "Fight a Dragon!";
    button3.textContent = "Chill lahhhh";
}

function changeTextButtonHumanDragon(){
    button3.style.visibility = "visible";
    button1.style.visibility = "visible";
    button1.textContent = "Kill the Anomaly";
    button2.textContent = "Train with the GOW";
    button3.textContent = "Chill with a glass of teh ping";
}

function changeTextButtonKnightMage(){
    button1.textContent = "Fight a Slime";
    button2.textContent = "Fight a Dragon!";
    button3.textContent = "Train with the GOW";
}

function changeTextButtonKMSlime(){
    button3.style.visibility = "visible";
    button2.style.visibility = "visible";
    button1.style.visibility = "visible";
    button1.textContent = "Fight the Anomaly!";
    button2.textContent = "Fight a Dragon!";
    button3.textContent = "Train with the GOW";
}

function changeTextButtonKMDragon(){
    button3.style.visibility = "visible";
    button2.style.visibility = "hidden";
    button1.style.visibility = "visible";
    button1.textContent = "Fight the Anomaly!";
    button3.textContent = "Train with the GOW";
}

function changeTextButtonTrain(){
    button1.style.visibility = "visible";
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";
    button1.textContent = "Do a Quadrillion push ups!!";
    button2.textContent = "Do a Quadrillion sit ups!!";
    button3.textContent = "Eat a Quadrillion plate of ZAP CAI PENG with neker gen neker gen neker ling curry zi hai you ji dan";
}

function changeTextButtonAftTrain() {
    button1.style.visibility = "hidden";
    button2.style.visibility = "visible";
    button3.style.visibility = "hidden";
    button2.textContent = "Fight the anomaly";
}

function changeTextButtonAftEat() {
    button1.style.visibility = "hidden";
    button2.style.visibility = "visible";
    button3.style.visibility = "hidden";
    button2.textContent = "Continue Eating";
}

function changeTextButtonAnomalyKnight(){
    button3.style.visibility = "hidden";
    button2.style.visibility = "visible";
    button2.textContent = "Ching Ching Ching readyy!!"; 
    button1.style.visibility = "hidden";
}

function changeTextButtonAnomalyMage(){
    button3.style.visibility = "hidden";
    button2.style.visibility = "visible";
    button2.textContent = "tiu tiu tiu readyy!!"; 
    button1.style.visibility = "hidden";
}

function changeTextButtonRoll(){
    button3.style.visibility = "hidden";
    button2.style.visibility = "visible";
    button2.textContent = "ROLL"; 
    button1.style.visibility = "hidden";    
}

function hideAllButttons() {
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
}


//CHOOSING CHARACTER

function buttonClickA() {
    button1.addEventListener("click", () => {
        content.textContent = "HUMAN !!!! What do you wan to do ?";
        buttonHuman();
    })
}

function buttonClickB() {
    button2.addEventListener("click", () => {
        content.textContent = "KNIGHT !!! who you wanna slay ?";
        buttonKnight();
        
    })  
}

function buttonClickC() {
    button3.addEventListener("click", () => {
        content.textContent = "MAGE !!! tiu tiu tiu...";
        buttonMage();
        
    })  
}



//HUMAN FUNCTION

function buttonHuman() {
    changeTextButtonHuman()
    button1.addEventListener("click", () => {
        content.textContent = "Squash Squash kill that thing" ;
        changeTextButtonRoll()
        button2.addEventListener("click", () => {
            showRoll()
            rollScore()
            if (playerScore <= enemyScore){
                deathbySlime()
            } else {
                wonSlime()
                changeTextButtonHumanSlime()
                afterSlimeHuman()
            }
            
        })
           
    })
    button2.addEventListener("click", () => {
        content.textContent = "FIGHTTT!! FOR YOUR LIFEEEE";
        changeTextButtonRoll()
        button2.addEventListener("click", () => {
            showRoll()
            rollScore()
            if (playerScore <= 8 || playerScore <= enemyScore ){
                deathbyDragon()
            } else {
                wonDragon()
                changeTextButtonHumanDragon()
                afterDragonHuman()
            }
            
        })
           
    })
    button3.addEventListener("click", () => { 
        deathbyOld()
        hideRoll()
    })

}

//KNIGHT FUNCTION

function buttonKnight() {
    changeTextButtonKnightMage()
    button1.addEventListener("click", () => {
        content.textContent = "Slash Slaush ? Wad de Slush";
        changeTextButtonRoll()
        button2.addEventListener("click", () => {
            showRoll()
            rollScore()
            if (playerScore <= enemyScore){
                deathbySlime()
            } else {
                wonSlime()
                changeTextButtonKMSlime()
                afterSlimeKnight()
            }
            
        })
    })
    button2.addEventListener("click", () => {
        content.textContent = "Slice those chonky thic legs";
        changeTextButtonRoll()
        button2.addEventListener("click", () => {
            showRoll()
            rollScore()
            if (playerScore <= enemyScore){
                deathbyDragon()
            } else {
                wonDragonKM()
                changeTextButtonKMDragon()
                afterDragonKnight()  
            }
            
        })
    })
    button3.addEventListener("click", () => {
        content.textContent = "Train to kill";
        changeTextButtonTrain()
        training()
    }) 
}

//MAGE FUNCTION

function buttonMage() {
    changeTextButtonKnightMage();
    button1.addEventListener("click", () => {
        content.textContent = "no mana or banana ?";
        changeTextButtonRoll()
        button2.addEventListener("click", () => {
            showRoll();
            rollScore();
            if (playerScore <= enemyScore){
                deathbySlime();
            } else {
                wonSlime();
                changeTextButtonKMSlime();
                afterSlimeMage()
            }
            
        })
    })
    button2.addEventListener("click", () => {
        content.textContent = "BANG! POW! , wait, no, tiu tiu tiu!!!";
        changeTextButtonRoll();
        button2.addEventListener("click", () =>{
            showRoll();
            rollScore();
            if (playerScore <= enemyScore){
                deathbyDragon();
            } else {
                wonDragonKM();
                changeTextButtonKMDragon();
                afterDragonMage();
            }
        })
           
    })
    button3.addEventListener("click", () => {
        content.textContent = "Train to shoot";
        changeTextButtonTrain();
        training();
    })
}

//AFTER SLIME BOSS FUNCTION

function afterSlimeHuman() {
    button1.addEventListener("click", () => {
        content.textContent = "After killing the slime you feel like a sigma ? ok lorr you try"
        changeTextButtonRoll();
        hideRoll();
        button2.addEventListener("click", () => {
            showRoll();
            rollScore();
            if (playerScore !== 10){
                deathbyGowHuman();
            } else {
                wonGOW();
                changeTextButtonAftTrain()    
            }
            
        })
        
    })
    button2.addEventListener("click", () => {
        content.textContent = "Time to kill de chonky lizard!!!"
        changeTextButtonRoll();
        hideRoll();
        button2.addEventListener("click", () => {
            showRoll();
            rollScore();
            if (playerScore <= enemyScore){
                deathbyDragon();
            } else {
                wonDragon();   
            }
            
        })
        
    })
    button3.addEventListener("click", () => { 
        hideRoll();
        deathbyOld();
    });
}

function afterSlimeKnight() {
    button1.addEventListener("click", () => {
        content.textContent = "This anamoly is extremly hard please prepare your ching ching ching"
        changeTextButtonAnomalyKnight()
        hideRoll()
    })
    button2.addEventListener("click", () => {
        content.textContent = "Time to kill de chonky lizard!!!"
        changeTextButtonRoll();
        hideRoll();
        button2.addEventListener("click", () => {
            showRoll();
            rollScore();
            if (playerScore <= enemyScore){
                deathbyDragon();
            } else {
                wonDragonKM();   
            }
            
        })
    })
    button3.addEventListener("click", () => {
        content.textContent = "Train to kill";
        hideRoll();
        changeTextButtonTrain();
        training();
    })

}

function afterSlimeMage() {
    button1.addEventListener("click", () => {
        content.textContent = "This anamoly is extremly difficult, get your tiu tiu tiu ready"
        changeTextButtonAnomalyMage()
        hideRoll()
    })
    button2.addEventListener("click", () => {
        content.textContent = "Time to kill de chonky lizard!!!"
        changeTextButtonRoll();
        hideRoll();
        button2.addEventListener("click", () => {
            showRoll();
            rollScore();
            if (playerScore <= enemyScore){
                deathbyDragon();
            } else {
                wonDragonKM();   
            }
            
        })
    })
    button3.addEventListener("click", () => {
        content.textContent = "Train to kill";
        hideRoll();
        changeTextButtonTrain()
        training();
    })
}

//AFTER DRAGON BOSS FUNCTION

function afterDragonHuman() {
    button1.addEventListener("click", () =>{
        content.textContent = "Dragon Lord get ready!!!"
        changeTextButtonRoll()
        hideRoll()

    })
    button2.addEventListener("click", () =>{
        content.textContent = "Train to kill!!";
        hideRoll()
        changeTextButtonTrain()
        training()
    })
    button3.addEventListener("click", () =>{
        deathbyOld()
    })

}

function afterDragonKnight() {
    button1.addEventListener("click", () =>{
        content.textContent = "This anamoly is extremly hard please prepare your ching ching ching"
        changeTextButtonAnomalyKnight()
        hideRoll()
        anomaly()
    })

    button3.addEventListener("click", () => {
        content.textContent = "Train to kill";
        hideRoll();
        changeTextButtonTrain();
        training();
    })

}

function afterDragonMage() {
    button1.addEventListener("click", () =>{
        content.textContent = "This anamoly is extremly difficult, get your tiu tiu tiu ready"
        changeTextButtonAnomalyKnight()
        hideRoll()
    })

    button3.addEventListener("click", () => {
        content.textContent = "Train to kill";
        hideRoll();
        changeTextButtonTrain();
        training();
    })

}
//TRAINING FUNCTIONS

function training() {
    button1.addEventListener("click", () => {
        content.textContent = "1st push up";
        changeTextButtonRoll();
        button2.addEventListener("click", () => {
            showRollPlayer();
            rollScore();
            if (playerScore <= enemyScore){
                deathbyTraining();
            } else {   
                content.textContent = "1 quadrillion push up";
                changeTextButtonRoll();
                rollScore();
                afterTrainingPU();  
            }
        })

    })
    button2.addEventListener("click", () => {
        content.textContent = "1st sit up";
        changeTextButtonRoll();
        button2.addEventListener("click", () => {
            showRollPlayer();
            rollScore();
            if (playerScore <= enemyScore){
                deathbyTraining();
            } else {   
                content.textContent = "1 quadrillion sit ups";
                changeTextButtonRoll();
                rollScore();
                afterTrainingSU();
                            
            }
        })

    })
    button3.addEventListener("click", () => {
        content.textContent = "1st plate...bruh......why this option thoo";
        changeTextButtonRoll();
        button2.addEventListener("click", () => {
            showRollPlayer();
            rollScore();
            if (playerScore !== 10){
                deathbyZCP();
            } else {   
                content.textContent = "errr weelll....you full ?";
                changeTextButtonAftEat()
                contEating();
            }
        })

    })

}

function afterTrainingPU() {
    button2.addEventListener("click", () => {
        showRollPlayer();
        rollScore();
            if (playerScore <= enemyScore){
                deathbyTraining();
            } else {
                content.textContent = "You finished the training !! Your arms are chonky thic...get ready to defeat the anomaly";
                changeTextButtonAftTrain();
            }


    })
}

function afterTrainingSU(){
    button2.addEventListener("click", () => {
        showRollPlayer();
        rollScore();
            if (playerScore <= enemyScore){
                deathbyTraining();
            } else {
                content.textContent = "You finished the training !! Your packs like rock...get ready to defeat the anomaly";
                changeTextButtonAftTrain();
            }


    })
}

function contEating() {
    button2.addEventListener("click", () =>{
        content.textContent = "You basically ate up the anomaly......saving the universe ??";
        hideAllButttons();
        hideRoll();
    })
}

//ANOMALY FUNCTIONS
function anomaly() {
    button2.addEventListener("click", () => {
        content.textContent = "Slash it SlASH IT!"
        playerHealth.textContent = health.playerHealthHuman 
        enemyHealth.textContent = health.anomalyHealth
        changeTextButtonRoll()
        hideRoll()
        showHealth()
        button2.addEventListener("click", () => {
            showRoll()
            rollScoreAnomaly()
            if (playerScore < enemyScore) {
                content.textContent = "Bro you dying....roll better!!"
            } else {
                content.textContent = "SLASH SLASH!!!"
            }
            let x = health.playerHealthHuman - enemyScore
            let y = health.anomalyHealth - playerScore

            playerHealth.textContent = x
            enemyHealth.textContent = y
            
            playerHealth.textContent = x - enemyScore
            enemyHealth.textContent = y - playerScore

            
        })
        
    })
}
//DEATHS FUNCTIONS

function deathbyOld() {
    content.textContent = "YOU DIED !!!..off old age..Yawnzz";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
}
function deathbySlime() {
    content.textContent = "YOU DIED!!!! killed by a slime...lol...noob"
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
}

function deathbyDragon() {
    content.textContent = "YOU DIED!!!! obviously...dragon leh"
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
}

function deathbyTraining() {
    content.textContent = "YOU DIED!!!! err.....you weak lor"
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
}

function deathbyZCP() {
    content.textContent = "YOU DIED!!!! yeaaaaaaa i mean thats alot of rice"
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
}

function deathbyGowHuman() {
    content.textContent = "YOU DIED!!!! ah fight a god lahh....orbigood"
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
}


//WINS FUNCTION

function wonSlime() {
    content.textContent = "just a slime....chill..what you gonna do next ?"
}

function wonDragon() {
    content.textContent = "WELL DONE human!!!, you practically ascended to dragon lord after getting dragon blood on your face."
}

function wonDragonKM() {
    content.textContent = "Chonky lizard dieded....What you gonna do next ?"
}

function wonTraining() {
    content.textContent = "WOW chonky thihck muscles"
}

function wonGOW() {
    content.textContent = "Wow human, your rolls are exceptional, go buy toto now! or vanquish the Anomaly!"
}


// RENDER
function render() {
    hideHealth()
    hideRoll()
    changeTextButton()
    buttonClickA()
    buttonClickB()
    buttonClickC()
}

render();




