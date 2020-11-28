class   Paper
{
    constructor(x,y,r) 
    {
    var  options ={
        restitution:0.5,
        friction:0.9,
        density:1.2,
        isStatic:false,
        
    }

this.r=r;
this.image=loadImage("paper.png")
this.body=Bodies.circle(x,y,r,options)
World.add(world,this.body)
}
display(){
    var paperpos=this.body.position;
var angle=this.body.angle
    push ()
    translate(paperpos.x,paperpos.y)
    rotate(angle)
    imageMode(CENTER)
    
    image(this.image,0,0,this.r ,this.r)
   pop()
}
}

