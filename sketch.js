
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,bin1,bin2,bin3;
var bin,bini;
function preload()
{
  bini=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(1000, 400);
bin=createSprite(800,300)
bin.addImage(bini)
bin.scale=0.4

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(500,360,1000,10);
paper=new Trash(100,350,30);
bin1=new Bin(800,345,150,20);
bin2=new Bin(865,290,20,120);
bin3=new Bin(735,290,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
bin1.display();
bin2.display();
bin3.display();
  paper.display();
  drawSprites();
}

function keyPressed(){
if (keyCode  ===  UP_ARROW){
    console.log(paper)
  Matter.Body.applyForce(paper.trash,paper.trash.position,{x:160,y:-160});

}

}


