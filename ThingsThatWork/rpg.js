//=====================GAME STATE / VARIABLES============================

// after clicking buttons, content and button text will change 
// 1st variable what page ? or what option chosen ? tag a number of the path chosen in an array []
// 2nd variable 
const page = []

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const content = document.querySelector("#content");




console.log(button1, button2, button3);
//PAGE 1

//change of button contents 
function changeTextButton(){
    button1.textContent = "Human"
    button2.textContent = "Knight"
    button3.textContent = "Mage" 
}
function changeTextButtonHuman(){
    button1.textContent = "Fight a Slime"
    button2.textContent = "Fight a Dragon!"
    button3.textContent = "Chill"
}
function changeTextButtonHumanRoll(){
    button1.textContent = "ROLL"
}
function changeTextButtonKnightMage(){
    button1.textContent = "Fight a Slime"
    button2.textContent = "Fight a Dragon!"
    button3.textContent = "Train with the GOW"
}

//Page 1 Choosing char
function buttonClickA() {
    button1.addEventListener("click", () => {
        content.textContent = "HUMAN !!!! What do you wan to do ?"
        buttonHuman();
    })
}

function buttonClickB() {
    button2.addEventListener("click", () => {
        content.textContent = "KNIGHT !!! who you wanna slay ?"
        buttonKnight()
        
    })  
}

function buttonClickC() {
    button3.addEventListener("click", () => {
        content.textContent = "MAGE !!! tiu tiu tiu..."
        buttonMage()
        
    })  
}



//PAGE 2 Human
function buttonHuman() {
    changeTextButtonHuman()
    button1.addEventListener("click", () => {
        content.textContent = "Squash Squash kill that thing" 
        button3.style.display = "none";
        button2.style.display = "none";
        changeTextButtonHumanRoll()
    })
    button2.addEventListener("click", () => {
        content.textContent = "FIGHTTT!! FOR YOUR LIFEEEE"
        button3.style.display = "none";
        button2.style.display = "none"
        changeTextButtonHumanRoll()
    })
    button3.addEventListener("click", () => { 
        content.textContent = "YOU DIED !!!..off old age..Yawnzz"
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
    })
}

// function buttonHuman() {
//     changeTextButtonHuman()
//     button1.addEventListener("click", () => {
//         content.textContent = "YOU DIED !!!! after fighting a slime lol"  
//     })
//     button2.addEventListener("click", () => {
//         content.textContent = "YOU DIED !!!!.....obviously. after fighting a dragon....."
//     })
//     button3.addEventListener("click", () => {
//         content.textContent = "YOU DIED !!!..off old age..Yawnzz"
//     })
// }



//PAGE 2 knight
function buttonKnight() {
    changeTextButtonKnightMage()
    button1.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!! after fighting a slime lol...cause slimeyy"
    })
    button2.addEventListener("click", () => {
        content.textContent = "YOU SURVIVED!!! nice job killing that thicck lizard"
    })
    button3.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!! of old age. welp training with a god aint short bruh"
    }) 
}


//Page 2 Mage
function buttonMage() {
    changeTextButtonKnightMage()
    button1.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!! after fighting a slime ?....causeeee itss slimeyyyyyy"
    })
    button2.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!! after fighting a dragon.. Tragic..."
    })
    button3.addEventListener("click", () => {
        content.textContent = "Wow you ascended to be a god ? whats next ?"
    })
}

changeTextButton()
buttonClickA()
buttonClickB()
buttonClickC()


