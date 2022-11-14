const form = document.myForm

form.addEventListener("submit", (event) =>{
    event.preventDefault()

    //console.log(form.gender.value)

    console.log(form.entertainment)

    for(let i = 0; i < form.entertainment.length; i ++)
    console.log(form.entertainment [i].checked)
})