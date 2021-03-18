
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var ground;
var rubber;
var hammer;
var sand1,sand2,sand3,sand4,sand5;
var iron;
function preload()
{
	
}

function setup() {
	createCanvas(1200,500);

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(200,200);
	ground = new Ground(600,450,20);
	rubber = new Rubber(800,400,50);
	hammer = new Hammer(100,100,100);
	sand1 = new Sand(310,400,10);
	sand2 = new Sand(330,400,10);
	sand3 = new Sand(350,400,10);
	sand4 = new Sand(370,400,10);
	sand5 = new Sand(390,400,10);

	iron = new Iron(1000,400,);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  stone.display();
  ground.display();
  rubber.display();
  hammer.display();
  sand1.display();
  sand2.display();
  sand4.display();
  sand3.display();
  sand5.display();
  iron.display();
  
 
}



