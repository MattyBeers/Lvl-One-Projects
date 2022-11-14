var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston"
    "Tommy Oliver"
]


var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)
}
