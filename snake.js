var scl = 20;
class Snake{
   constructor(){
        this.x=0;
        this.y=0;
        this.xspeed=1;
        this.yspeed=0;
        this.tail=[];
   }    

    createSnake(){

        fill(128,255,0);
        rect(this.x,this.y,scl,scl);
    }
    update(){
        this.x=this.x + this.xspeed * scl;
        this.y=this.y + this.yspeed * scl;
        

    }
    
}
