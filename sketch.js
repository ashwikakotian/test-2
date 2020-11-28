
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dus1 ,dus2, dus3
var ground
var pap
var paperObject
var dusImage
var papImage

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dus1=new Dustbin(450,650,200,20)

dus2=new Dustbin(550,600,20,100)
dus3=new Dustbin(350,600,20,100)

ground=new Ground(0,690,10000,10)


pap=new Paper(100,300,50)

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dus1.display()
  dus2.display()
  dus3.display()
  ground.display()
  pap.display()
  
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(pap.body,pap.body.position,{x:105,y:-105})
	}
}



