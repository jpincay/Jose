var mashArray = ["Final Destination", "Starfox", "Nes", "Jungle"];
var firstQuestion = [5,10];
var secondQuestion = ["Meta-knight", "Pit"]

for ( var i=0); i<2; i++){
    firstQuestion.push(prompt("How many times will you strike?"));
    secondQuesion.push(prompt("Who will you choose to fight?"));
}

console.log("You fought" + secondQuestion[2] + "in the" + mashArray[Math.floor(Math.random()*3)]+"and hit" + secondQuestion[Math.floor(Math.random()*1)] + firstQuestion[2] + "times");