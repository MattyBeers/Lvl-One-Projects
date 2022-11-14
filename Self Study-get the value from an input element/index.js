let displayText = document.createElement("p")

let input= document.getElementById("input1")

let newButton = document.getElementById("button-one")
newButton.addEventListener("click", function(e){
     displayText.textContent = input.value
     console.log(displayText.textContent)
     document.body.append(displayText) 
} )

let button2 = document.querySelector("#info")
function send(){
    return console.log(info.value)
}




