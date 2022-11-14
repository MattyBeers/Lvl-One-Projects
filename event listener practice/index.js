function myFunction(){
    console.log("i want to change up the event listener");
}

let btn = addEventListener

document.getElementById("btn").addEventListener('mouseover', function(){
    console.log("You clicked me!");
})

document.getElementById("one").addEventListener("mouseover", function(){
    this.style.backgroundColor ="blue"
})

document.getElementById("two").addEventListener("click", function(){
    this.style.backgroundColor ="red"
})

document.getElementById("three").addEventListener("mouseup", function(){
    this.style.backgroundColor ="yellow"
})

document.getElementById("four").addEventListener("dblclick", function(){
    this.style.backgroundColor ="green"
})

document.getElementById("five").addEventListener("wheel", function(){
    this.style.backgroundColor ="orange"
})
//mouseover. mousedown, dblclick, mouseout