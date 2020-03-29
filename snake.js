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

        for(var i=0; i<this.tail.length; i++){
            fill(128,255,0);
            rect(this.tail[i].x,this.tail[i].y,scl,scl);
        } 
        fill(128,255,0);
        rect(this.x,this.y,scl,scl);
    }
    update(){
        if(this.total == this.tail.length){
            for(var i=0; i<this.tail.length; i++){
                this.tail[i] = this.tail[i+1];
            }
            


        }
        this.tail[this.total-1] = createVector(this.x,this.y);

        this.x=this.x + this.xspeed * scl;
        this.y=this.y + this.yspeed * scl;
        

    }
    
}
