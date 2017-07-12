/*function welloHorld(){
    console.log("Wello Horld!");
    return "Wello Horld!";
} 

welloHorld();*/

function rand(num){
    //returns a random number between 0 and 1//
    var randNum = Math.random()*num;
    var result = Math.floor(randNum);
    return result;
    return Math.floor(Math.random()*num);
}

var students = ["Nick", "Rocket", "Ayinde", "Evan", "Priya"];

console.log(students[rand(5)]);
