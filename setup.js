var s;
var random_x = Math.random() * 49 * scl;
var random_y = Math.random() * 49 * scl;



function setup(){
    createCanvas(500,500);
   
    s= new Snake();
    
    
}

function draw(){
    
    background(51);
    s.createSnake();
    s.update();
    createFood();
    frameRate(10);
}

function createFood(){
    
    console.log(random_x + ' ' + random_y);
    fill(255,102,102);
    rect(ceil(random_x),ceil(random_y),scl,scl);
}

function keyPressed(){
    if(keyCode == LEFT_ARROW)
    {
        s.xspeed = -1;
        s.yspeed = 0;
    } else if(keyCode == RIGHT_ARROW)
    {
        s.xspeed = 1;
        s.yspeed = 0;
    } else if(keyCode == UP_ARROW)
    {
        s.xspeed = 0;
        s.yspeed = -1;
    } else if(keyCode == DOWN_ARROW)
    {
        s.xspeed = 0;
        s.yspeed = 1;
    }
}
