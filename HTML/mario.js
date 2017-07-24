funtion setup(){
    createCanvas(500,500);
    background(225);

    fill(0,255,255);
    arc();
}







var clock;
function random();
    var clock = Math.floor(Math.random()*256);
    return clock;
}
function mouseMoved(){
    ellipse(mouseX, mouseY, Math.random()*50, Math.random()*50);
    fill(random(), random(),random());
return false};