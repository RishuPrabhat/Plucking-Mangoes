
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,tree,stone,mango,ground;

function preload(){
	boy1 = loadImage("Plucking mangoes/boy.png");
	stone1 = loadImage("Plucking mangoes/stone.png");
	mango12 = loadImage("Plucking mangoes/mango.png");
	tree1 = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	mango1 = new Mango(1155,130,20);
	mango2 = new Mango(1160,120,20);
	mango3 = new Mango(1170,130,20);
	mango4 = new Mango(1180,130,20);
	mango5 = new Mango(1190,140,20);
	tree = new Tree(1200,150,20,20);
	stone = new Stone(400,300,20,20);
	ground = new Ground(1600,650,20,100);
	boy =new Boy(400,600,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  stone.display();
  tree.display();
  ground.display();


}



