//=====================GAME STATE / VARIABLES============================

// after clicking buttons, content and button text will change 
// 1st variable what page ? or what option chosen ? tag a number of the path chosen in an array []
// 2nd variable 


const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const content = document.querySelector("#content");

console.log(button1, button2, button3);

function buttonClick() {
    button1.addEventListener("click", () => {
        content.textContent = "HUMAN !!!!"
    })
}

buttonClick()



