

document.getElementById("header").innerText="JavaScript made this!!"

document.getElementById("header").style.fontFamily ="Arial"

document.getElementById("header").style.fontSize = "35px"
document.getElementById("header").style.textAlign = "center"

const para = document.createElement("p")
para.innerHTML = "<p><span>Matt Beers</span> Wrote this JavaScript</p>"
document.getElementById("header").appendChild(para)


var myName = document.querySelector("span")
myName.setAttribute("id", "name")
document.getElementById("name").style.color="red"

document.getElementById("msg1").innerText = "Do all things Well!"
document.getElementById("msg2").innerText = "Do all things Well!"

var div1 = document.getElementById("main")
var clear = document.getElementById("clear-button").addEventListener('click', function(){
    deleteMessages()
})

function deleteMessages(){
    div1.innerHTML = " "
    console.log("You have cleared data")
   
}


