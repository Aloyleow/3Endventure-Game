//=====================GAME STATE / VARIABLES============================

// after clicking buttons, content and button text will change 
// 1st variable what page ? or what option chosen ? tag a number of the path chosen in an array []
// 2nd variable 
let playerScore ;
let enemyScore ;
const numberRoll = [1,2,3,4,5,6,7,8,9,10];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const content = document.querySelector("#content");

const playerRoll = document.querySelector("#playerNumber")
const enemyRoll = document.querySelector("#enemyNumber")

console.log(playerRoll, enemyRoll);
console.log(button1, button2, button3);


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
    } else if (y < 1) {
        return numberRoll[9];
    }   
}



function showRoll(){
    playerRoll.style.visibility = "visible";
    enemyRoll.style.visibility = "visible";
}
function hideRoll(){
    playerRoll.style.visibility = "hidden";
    enemyRoll.style.visibility = "hidden";
}

function rollScore(){
    playerScore = rng()
    enemyScore = rng()
    playerRoll.textContent = playerScore
    enemyRoll.textContent = enemyScore

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
    button1.textContent = "Fight a Slime";
    button2.textContent = "Fight a Dragon!";
    button3.textContent = "Chill lahhhh";
}

function changeTextButtonHumanDragon(){
    button3.style.visibility = "visible";
    button1.style.visibility = "visible";
    button1.textContent = "Fight a Slime";
    button2.textContent = "Fight a Dragon!";
    button3.textContent = "Chill lahhhh";
}

function changeTextButtonKnightMage(){
    button1.textContent = "Fight a Slime";
    button2.textContent = "Fight a Dragon!";
    button3.textContent = "Train with the GOW";
}

function changeTextButtonKMSlime(){
    button3.style.visibility = "visible";
    button1.style.visibility = "visible";
    button1.textContent = "Fight a Slime";
    button2.textContent = "Fight a Dragon!";
    button3.textContent = "Chill lahhhh";
}

function changeTextButtonKMDragon(){
    button3.style.visibility = "visible";
    button1.style.visibility = "visible";
    button1.textContent = "Fight a Slime";
    button2.textContent = "Fight a Dragon!";
    button3.textContent = "Chill lahhhh";
}

function changeTextButtonRoll(){
    button3.style.visibility = "hidden";
    button2.textContent = "ROLL"; 
    button1.style.visibility = "hidden";    
}


//Choosing char
function buttonClickA() {
    button1.addEventListener("click", () => {
        content.textContent = "HUMAN !!!! What do you wan to do ?";
        buttonHuman()
    })
}

function buttonClickB() {
    button2.addEventListener("click", () => {
        content.textContent = "KNIGHT !!! who you wanna slay ?";
        buttonKnight()
        
    })  
}

function buttonClickC() {
    button3.addEventListener("click", () => {
        content.textContent = "MAGE !!! tiu tiu tiu...";
        buttonMage()
        
    })  
}



//Human func
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
            }
            
        })
            
    })
    button2.addEventListener("click", () => {
        content.textContent = "FIGHTTT!! FOR YOUR LIFEEEE";
        changeTextButtonRoll()
        button2.addEventListener("click", () => {
            showRoll()
            rollScore()
            if (playerScore <= 8 || playerScore <= enemyScore){
                deathbyDragon()
            } else {
                wonDragon()
                changeTextButtonHumanDragon()
            }
            
        })
           
    })
    button3.addEventListener("click", () => { 
        deathbyOld()
    })

}

//Knight func
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
            }
            
        })
    })
    button3.addEventListener("click", () => {
        content.textContent = "train to kill";
        changeTextButtonRoll()
    }) 
}


//Mage func
function buttonMage() {
    changeTextButtonKnightMage()
    button1.addEventListener("click", () => {
        content.textContent = "no mana or banana ?";
        changeTextButtonRoll()
        button2.addEventListener("click", () => {
            showRoll()
            rollScore()
            if (playerScore <= enemyScore){
                deathbySlime()
            } else {
                wonSlime()
                changeTextButtonKMSlime()
            }
            
        })
    })
    button2.addEventListener("click", () => {
        content.textContent = "BANG! POW! , wait, no, tiu tiu tiu!!!";
        changeTextButtonRoll()
        if (playerScore <= enemyScore){
            deathbyDragon()
        } else {
            wonDragonKM()
            changeTextButtonKMDragon()
        }
        
    })
    button3.addEventListener("click", () => {
        content.textContent = "train to shoot";
        changeTextButtonRoll()
    })
}

//Deaths
function deathbyOld() {
    content.textContent = "YOU DIED !!!..off old age..Yawnzz";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
}
function deathbySlime() {
    content.textContent = "YOU DIED!!!! killed by a slime...lol...noob"
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
}

function deathbyDragon() {
    content.textContent = "YOU DIED!!!! obviously...dragon leh"
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
}


//Wins
function wonSlime() {
    content.textContent = "just a slime....chill..what you gonna do next ?"
}

function wonDragon() {
    content.textContent = "WELL DONE human!!!, you practically ascended to dragon lord after getting dragon blood on your face."
}

function wonDragonKM() {
    content.textContent = "Chonky lizard dieded....What you gonna do next ?"
}

// render
function render() {
    hideRoll()
    changeTextButton()
    buttonClickA()
    buttonClickB()
    buttonClickC()
}

render();




