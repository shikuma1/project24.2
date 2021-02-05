
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plane = new Plane(400,height,800,20);
	hammer = new Hammer(400,300,200,50);
	stone= new Stone(300,300,150,150);
	rubber= new Rubber(300,300,50);

 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(188,254,255);
  hammer.body.position.x = mouseX;
  hammer.body.position.y = mouseY;

  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
  drawSprites();
 
}



