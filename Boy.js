class Boy {
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("Sprites/boy.png")
        World.add(world, this.body);
     }
     display(){
     var pos =this.body.position;
     push();
     translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image,pos.x, pos.y,200,300);
     pop();
     }
}
    
