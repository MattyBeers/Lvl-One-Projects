document.getElementById("header").innerHTML = "JavaScript Made This !!";
document.getElementById("header").style.color = "black";
document.getElementById("header").style.fontSize = "20px";
document.getElementById("header").style.fontWeight = "bold";
document.getElementById("header").style.textAlign = "center";
document.getElementById("header").style.backgroundColor = "red";
document.getElementById("header").style.padding = "10px";
document.getElementById("header").style.margin = "10px";
document.getElementById("header").style.borderRadius = "10px";


var h1 = document.createElement("h1");
var h2 = document.createElement("h2");
var span = document.createElement("span");
var p = document.createElement("p");

var title = document.createTextNode("");
var myName = document.createTextNode("My name is:Matt Beers");

h1.appendChild(title);
span.appendChild(myName);
span.classList.add("name");
h2.appendChild(span);

document.body.prepend(h1);
document.body.prepend(h2);


var messages = document.querySelectorAll(".message");
var newMessages = ["Hello", "Hi", "How are you?", "I am fine", "I am doing well", "I am doing great", "I am doing very well", "I am doing great"];

for (i = 0; i < messages.length; i++) {
    messages[i].innerHTML = newMessages[i];
}

var clearButton = document.querySelector("clear-button");
clearButton.addEventListener("click", function(event) {
    for (i = 0; i < messages.length; i++) {
        messages[i].remove();
    }
});


var blueBrownTheme = true;
var redBlackTheme = false;
var dropDown = document.querySelector("#theme-drop-down");

dropDown.addEventListener("change", function(click) {
    if (dropDown.value == "blue-brown") {
        blueBrownTheme = true;
        redBlackTheme = false;
        document.body.style.backgroundColor = "lightblue";
        document.body.style.color = "black";
    } else if (dropDown.value == "red-black") {
        redBlackTheme = true;
        blueBrownTheme = false;
        document.body.style.backgroundColor = "red";
        document.body.style.color = "black";
    }

    console.log(dropDown.value);
})


const messageLeft = document.getElementById("#message-left");
const messageRight = document.getElementById("#message-right");
const btn1 = document.getElementById("#btn1");
const input = document.getElementById("#input");

function changeMessage() {
    messageLeft.innerHTML = input.value;
    messageRight.innerHTML = input.value;
}

btn1.addEventListener("click", changeMessage);