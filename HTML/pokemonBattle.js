function setup(){
    createCanvas(600, 600);
}

var hp = 100;
var hp2 = 100;

function draw(){
    background(51, 204, 51);
    ellipse(150, 300, 90, 90);
    ellipse(475, 150, 90, 90);
    rect(100, 400, hp, 10);
    rect(425, 250, hp, 10);
    text("HP:100/100", 100, 380);
    text("HP:100/100", 425, 235);
    quad(425, 300, 525, 300, 525, 400, 425, 400);
    quad(100, 475, 200, 475, 200, 575, 100, 575);
}
