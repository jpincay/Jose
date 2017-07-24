var prompt = require('prompt-sync')();
var n = prompt('r,p,s?'); 
var playerChoice = "r";
var choices = ["r", "p", "s"];
var compChoice = choices[Math.floor(Math.random()*3)];

if (compChoice == playerChoice){
    console.log("It's a tie!");
}
else if (compChoice == "s" && playerChoice == "r"){
    console.log("You Won!");
}
else if (compChoice == "p" && playerChoice == "r"){
    console.log("You Lost!"); 
}
else if (compChoice == "r" && playerChoice == "s"){
    console.log("You Lost!");
}
else if (compChoice == "p" && playerChoice == "s"){
    console.log("You Won!");
}
else if (compChoice == "s" && playerChoice == "p"){
    console.log("You Lose!");
}
else if (compChoice == "r" && playerChoice == "p"){
    console.log("You Won!")
}

/*function welloHorld(){
    console.log("Wello Horld!");
    return "Wello Horld!";
    
} 

welloHorld();*/
