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
    
   
    frameRate(50);
}

function createFood(){
    
    console.log(random_x + ' ' + random_y);
    fill(255,102,102);
    rect(ceil(random_x),ceil(random_y),scl,scl);
}