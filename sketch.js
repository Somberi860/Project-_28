
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var mango1;
var boy;
var stone;
var sling;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1600,20);
	mango1 = new Mango(990,200,10);
	mango2 = new Mango(990,290,10);
	mango3 = new Mango(1250,200,10);
	mango4 = new Mango(1120,200,10);
	mango5 = new Mango(1150,100,10);
	tree = new Tree(550,175,500,710);
	boy = new Boy(100,314,10,20);
	stone = new Stone(70,280,50,50);
	sling = new Sling(stone.body,{x:200,y:100});

	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Gray");
  
  drawSprites();
  ground.display();
  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  stone.display();
  sling.display();
  //detectollision(stone,mango1);
  //detectollision(stone,mango2);
  //detectollision(stone,mango3);
  //detectollision(stone,mango4);
  //detectollision(stone,mango5);
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
  if(KeyCode === 32){
    Matter.body.setPosition(stone.body,{x:70, y:280})
    sling.attach(stone.body);
  }
}





