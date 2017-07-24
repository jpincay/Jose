var prompt = require('prompt-sync')();



//var n = prompt('How many more times?');//
var wallet = 1000;
var store = ["sword", "food"];
var prices = [500, 100];
var inventory = [];

while (wallet>0){
    var purchaseChoice = prompt("What are you buyin'");
    if (purchaseChoice == ("sword") && wallet >= prices[0]){
        wallet = wallet - prices[0];
        inventory.push("sword");
    }
    else if (purchaseChoice == store[1] && wallet >= prices[1]){
        wallet = wallet - prices[1];
        inventory.push("food");
    }
    else if (purchaseChoice == "quit"){
        wallet = 0
    }
    else{
        console.log("Not an ittouch supperSmash.js")
    }
}