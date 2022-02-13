
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1;
var side1,side2;

function preload()
{
	
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	ball=Bodies.circle(50,350,30,ball_option);
	World.add(world,ball)

	ground1=new Ground(700,550,1500,20);
	side1=new Ground(1000,490,20,100);
	side2=new Ground(1300,490,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse (ball.position.x,ball.position.y,30,30)
  
  ground1.display();
  side1.display();
  side2.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball,ball.position,{x:200,y:-200})
	}
}



