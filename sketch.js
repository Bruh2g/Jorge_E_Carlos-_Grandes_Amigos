
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
	var options = {
		frictionAir: 0.01
	}
	//Crie os Corpos Aqui.
	jorge = Bodies.circle(400, 200, 50, options)
	World.add(world,jorge)
	Engine.run(engine);

	var options2 = {
		isStatic: true
	}
	carlos = Bodies.rectangle(200, 690, 750, 1000, options2)
	World.add(world, carlos)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipse(jorge.position.x, jorge.position.y, 50)
  rect(carlos.position.x, carlos.position.y, 750, 1000)
}



