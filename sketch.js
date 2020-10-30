const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball,engine,world
function preload()
{
	
}

function setup() {
//chganges Made
	createCanvas(1600, 700);

	groundSprite=createSprite(width/2, 690, width,10);
	groundSprite.shapeColor = "white";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(200,450,40);
	tBottom = new Dustbin(1100,670,200,20);
	tSide1 = new Dustbin(1000,620,20,120);
	tSide2 = new Dustbin(1200,620,20,120);

	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ball.display();
  tBottom.display();
  tSide1.display();
  tSide2.display();

 // keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	
	 }
   }
