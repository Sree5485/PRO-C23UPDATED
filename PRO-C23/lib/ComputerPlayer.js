class ComputerPlayer {

    constructor(x,y,width,heigth){
    
    var options={
        isStatic=false
    }
    
    this.body=Bodies.rectangle(x,y,width,heigth,options);
    this.width=width;
    this.heigth=heigth;
    this.image=loadImage("./assets/player.png")
    
    World.add(world,this.body);
    
    }
    
    display(){
    
    var pos= this.body.position;
    var angle= this.body.angle;
    
    push ();
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode (center)
    image (this.image,0,0,this.width,this.heigth)
    pop ();
    
    }
    
    }