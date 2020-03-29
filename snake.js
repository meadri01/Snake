var scl = 10;
class Snake{
   constructor(){
        this.x=0;
        this.y=0;
        this.xspeed=1;
        this.yspeed=0;
   }    

    createSnake(){

        fill(255);
        rect(this.x,this.y,scl,scl);
    }
    update(){
        this.x=this.x + this.xspeed * scl;
        this.y=this.y + this.yspeed * scl;
        

    }
}
