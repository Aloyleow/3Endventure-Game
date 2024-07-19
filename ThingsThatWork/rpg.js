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
function buttonClickA() {
    button1.addEventListener("click", () => {
        content.textContent = "HUMAN !!!!"
        buttonHumanA();
        buttonHumanB();
        buttonHumanC();
    })
}

function buttonClickB() {
    button2.addEventListener("click", () => {
        content.textContent = "KNIGHT !!!"
        buttonKnightA()
        buttonKnightB()
        buttonKnightC()
    })  
}

function buttonClickC() {
    button3.addEventListener("click", () => {
        content.textContent = "MAGE !!!"
        buttonMageA()
        buttonMageB()
        buttonMageC()
    })  
}



//PAGE 2 Human

function buttonHumanA() {
    button1.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!! after fighting a slime lol"
    })
}

function buttonHumanB() {
    button2.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!!.....obviously. after fighting a dragon....."
    })
}

function buttonHumanC() {
    button3.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!!.....of old age. yawnnzzz"
    })
}

//PAGE 2 knight

function buttonKnightA() {
    button1.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!! after fighting a slime lol...cause slimeyy"
    })
}

function buttonKnightB() {
    button1.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!! of old age. welp training with a god aint short bruh"
    })
}

function buttonKnightC() {
    button1.addEventListener("click", () => {
        content.textContent = "YOU SURVIVED!!! nice job killing that thicck lizard"
    })
}

//Page 3 Mage

function buttonMageA() {
    button1.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!! after fighting a slime ?....causeeee itss slimeyyyyyy"
    })
}

function buttonMageB() {
    button2.addEventListener("click", () => {
        content.textContent = "Wow you ascended to be a god ? whats next ?"
    })
}

function buttonMageC() {
    button3.addEventListener("click", () => {
        content.textContent = "YOU DIED !!!! after fighting a dragon.. Tragic..."
    })
}
buttonClickA()
buttonClickB()
buttonClickC()

