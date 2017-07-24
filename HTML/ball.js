function setup(){
    createCanvas(600,600);
    //background(255, 153, 204);//
}

var x = 100;
var y = 5;

function draw(){
    background(255, 153, 204);
    ellipse(x, y, 60, 60);

    if (x >= 600-30){
        xSpeed = x Speed;
    } 
    
    else if (x <= 0+30){
        xSpeed = xSpeed;
    }
    x += xSpeed;


        if (y >= 600-30){
        ySpeed = ySpeed;
    } 
    
    else if (y <= 0+30){
        ySpeed = ySpeed;
    }
    y += ySpeed;
    
    }