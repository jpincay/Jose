/*function setup(){
    createCanvas(600, 600);
}



var x = 300;
var y = 500;

function draw (){
    background(100);
    ellipse(50, 50, 40, 40);
    ellipse(110, 50, 40, 40);
    ellipse(170, 50, 40, 40);
    ellipse(230, 50, 40, 40);
    ellipse(290, 50, 40, 40);
    ellipse(350, 50, 40, 40);
    ellipse(410, 50, 40, 40);
    ellipse(470, 50, 40, 40);
    ellipse(530, 50, 40, 40);
    fill(255, 51, 0);
    rect(x,y,30,50);
    if (keyIsDown(LEFT_ARROW)){
        x-=5;
    } else if (keyIsDown(RIGHT_ARROW)){
        x+=5;
    }
}

function Bullet(x,y){
    this.x=x;
    this.y=y;
}

function keyPressed(){
    //var bullet1 = new Bullet(spaceshipx, spaceshipy); 
}

/*function Draw(){
    ellipse(bullet.x, bullet.y);
    bullet.y=10;
}*/

function setup(){
    createCanvas(630,600);
   
}

var x = 300;
var y = 500;

function draw (){
    background(50);
    fill("green")
    ellipse(50, 50, 40, 40);
    ellipse(110, 50, 40, 40);
    ellipse(170, 50, 40, 40);
    ellipse(230, 50, 40, 40);
    ellipse(290, 50, 40, 40);
    ellipse(350, 50, 40, 40);
    ellipse(410, 50, 40, 40);
    ellipse(470, 50, 40, 40);
    ellipse(530, 50, 40, 40);
    ellipse(590, 50, 40, 40);
    fill("red");
    rect(x,y,30,50);
    if (keyIsDown(LEFT_ARROW) && x != 0){
        x-=5;
    } else if (keyIsDown(RIGHT_ARROW) && x != 600){
        x+=5;
    }

    if (x >= 630-60){
        x+=0;
    } else if (x <= 0+30){
        x+=0;
    }
}

var bullet1;
var x = 400;
var motion = 550;

function Bullet(shootX, shootY){
    this.shootX = shootX;
    this.shootY = shootY
}


[2:40] 
function keyPressed() {
    if (keyCode == 32){
        bullet1 = new Bullet(x, 550);

  }
}


[2:40] 
function draw(){


[2:41] 
if (typeof bullet1 !== 'undefined'){
        fill("white");
        ellipse(bullet1.shootX, bullet1.shootY, 5, 5);
        bullet1.shootY -= 10;
        console.log("dfg;");

  }


[2:41] 
}


[2:41] 
//You don't need the console.log


[2:50] 
// or the times