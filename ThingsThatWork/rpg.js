//=====================GAME STATE / VARIABLES============================

// after clicking buttons, content and button text will change 
// 1st variable what page ? or what option chosen ? tag a number of the path chosen in an array []
// 2nd variable 
const numberRoll = [1,2,3,4,5,6,7,8,9,10];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const content = document.querySelector("#content");

const playerRoll = document.querySelector("#playerNumber")
const enemyRoll = document.querySelector("#enemyNumber")

console.log(playerRoll, enemyRoll);
console.log(button1, button2, button3);
console.log(rng());
console.log(rng());
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
    playerRoll.textContent = numebrRoll[1];
    enemyRoll.textContent = numberRoll[9];
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


function changeTextButtonKnightMage(){
    button1.textContent = "Fight a Slime";
    button2.textContent = "Fight a Dragon!";
    button3.textContent = "Train with the GOW";
}

function changeTextButtonRoll(){
    button3.style.display = "none";
    button2.style.display = "none";
    button1.textContent = "ROLL";
    // button1.addEventListener("click", () => {
    //     rng()
    // })
    
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
        showRoll()
    })
    button2.addEventListener("click", () => {
        content.textContent = "FIGHTTT!! FOR YOUR LIFEEEE";
        changeTextButtonRoll()
        showRoll()
    })
    button3.addEventListener("click", () => { 
        content.textContent = "YOU DIED !!!..off old age..Yawnzz";
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
    })
}


//Knight func
function buttonKnight() {
    changeTextButtonKnightMage()
    button1.addEventListener("click", () => {
        content.textContent = "Slash Slaush ? Wad de Slush";
        changeTextButtonRoll()
        showRoll()
    })
    button2.addEventListener("click", () => {
        content.textContent = "Slice those chonky thic legs";
        changeTextButtonRoll()
        showRoll()
    })
    button3.addEventListener("click", () => {
        content.textContent = "train to kill";
        changeTextButtonRoll()
        showRoll()
    }) 
}


//Mage func
function buttonMage() {
    changeTextButtonKnightMage()
    button1.addEventListener("click", () => {
        content.textContent = "no mana or banana ?";
        changeTextButtonRoll()
        showRoll()
    })
    button2.addEventListener("click", () => {
        content.textContent = "BANG! POW! , wait, no, tiu tiu tiu!!!";
        changeTextButtonRoll()
        showRoll()
    })
    button3.addEventListener("click", () => {
        content.textContent = "train to shoot";
        changeTextButtonRoll()
        showRoll()
    })
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




