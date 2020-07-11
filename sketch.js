var ball,r1,r2,r3
var world,engine
var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	dustbin=new Dustbin(1100,500,50,50)


	ball=new Ball(100,630,20)

	ground=new Ground(width/2,655,width,20)

	
	r1=Bodies.rectangle(995,600,10,100,{isStatic:true})
	r2=Bodies.rectangle(1100,645,200,10,{isStatic:true})
	r3=Bodies.rectangle(1195,600,10,100,{isStatic:true})

	World.add(world,r1)
	World.add(world,r2)
	World.add(world,r3)
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Engine.update(engine)






ground.display()

rect(r1.position.x,r1.position.y,10,100)
rect(r2.position.x,r2.position.y,200,10)
rect(r3.position.x,r3.position.y,10,100)

dustbin.display()
  ball.display()
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}

}

