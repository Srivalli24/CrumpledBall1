
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg, paper, cart;


function preload()
{
	backgroundImg=loadImage("Sky.png");	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,600);
	cart = new Cart(100,600, 50, 50)

	Engine.run(engine);
  
}


function draw() {
  background(backgroundImg);
  paper.display();
  cart.display();
 
}



