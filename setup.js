var s;
var random_x;  
var random_y;



function setup(){
    createCanvas(500,500);
   
    s= new Snake();
    random_x = (floor(random() * 500 / scl))*scl; 
    random_y = (floor(random() * 500 / scl))*scl;

    
}

function draw(){
    
    background(51);
    s.createSnake();
    
    s.update();

    createFood();
    
    if(dist(s.x,s.y,random_x,random_y) < scl) {
        update_food_pos();
        console.log(random_x + ' ' + random_y)
    }

    frameRate(10);
}

function createFood(){
    
    console.log(random_x + ' ' + random_y);
    fill(255,102,102);
    rect(random_x,random_y,scl,scl);
}

function keyPressed() {
    if(keyCode === LEFT_ARROW){
        s.xspeed = -1;
        s.yspeed = 0;
    } else if(keyCode === RIGHT_ARROW) {
        s.xspeed = 1;
        s.yspeed = 0;
    } else if(keyCode === UP_ARROW) {
        s.xspeed = 0;
        s.yspeed = -1;
    } else if(keyCode === DOWN_ARROW) {
        s.xspeed = 0;
        s.yspeed = 1;
    }
}

function update_food_pos(){
    random_x = (floor(random() * 500 / scl))*scl; 
    random_y = (floor(random() * 500 / scl))*scl;
 }
