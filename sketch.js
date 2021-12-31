
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restituition:0.3,
		friction:0,
		density:1.2

	}
	ball=Matter.Bodies.circle(200,200,10,ball_options)
	World.add(ball,world)
     

	Engine.run(engine);
  
	 ground=new Ground(width/2,670,width,20)
	 leftSide= new Ground(1100,600,20,120);
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  groundobj.display()
  leftside.display()
  
  drawSprites();
 
}

function keyPreesed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}


