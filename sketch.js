
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	rope1=new rope(bobObject1.Body,roofObject1.Body,-bobDiameter*2,0)
}

function setup() {
	createCanvas(800, 700);
	createCanvas(3000,800);
engine=Engine.create();
world=engine.world;
ground=new Ground(600,600,1200,20);

  Object1 = new Box(900, 100, 70, 70);
  Object2= new Box(900, 100, 70, 70);
  Object3= new Box(900, 100, 70, 70);
  Object4= new Box(900, 100, 70, 70);
  Object5 = new Box(900, 100, 70, 70);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  object1.display();
  object2.display();
  object3.display();
  object14.display();
  object5.display();

 bob.display();
 chain.display();

  

  
  drawSprites();
 
}
diplay()
{
	var pointA=this.rope.bodyA.position;
	var pointB=this.rope.bodyB.position;
	
	strokeWeight(2);

	var Anchor1X=pointA.x
	var Anchor1Y=pointA.y

	var Anchor2X=pointB.x+this.offsetX
	var Anchor2Y=pointB.y+this.offsetY

	line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	
	
}
constructor(body1,body2,offsetX,offsetY)
{
	this.offsetX=offsetX
	this.offsetY=offsetY
	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.offsetX,y:this.offsetY}
	}
	this.rope=constraint.create(options)
	World.add(world,this.rope)
}



