
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(3000, 800);
	engine = Engine.create();
	world = engine.world;

	//ground
	ground = new Ground(600, 750, 1200, 20);
	
	//boxes
	box1 = new Roof(900,100,70,70);
	box2 = new Roof(900,100,70,70);
	box3 = new Roof(900,100,70,70);
	box4 = new Roof(900,100,70,70);
	box5 = new Roof(900,100,70,70);
	box6 = new Roof(900,100,70,70);
	box21 = new Roof(900,100,70,70);
	box22 = new Roof(900,100,70,70);

	box7 = new Roof(800,100,70,70);
	box8 = new Roof(800,100,70,70);
	box9 = new Roof(800,100,70,70);
	box10 = new Roof(800,100,70,70);
	box11 = new Roof(800,100,70,70);
	box12 = new Roof(800,100,70,70);

	box13 = new Roof(700,100,70,70);
	box14 = new Roof(700,100,70,70);
	box15 = new Roof(700,100,70,70);
	box16 = new Roof(700,100,70,70);
	box17 = new Roof(700,100,70,70);
	box18 = new Roof(700,100,70,70);
	box19 = new Roof(700,100,70,70);
	box20 = new Roof(700,100,70,70);



	//bobs
	bob1 = new Bob(200,200,80,80);
	bobDiameter = 80;

	//constrained rope
	rope1 = new Rope(bob1.body,{x:500,y:200}, -bobDiameter*4,0);

	Engine.run(engine);
  
}


function draw() {
  background(200);
  rectMode(CENTER);

  rope1.display();

  ground.display();
  bob1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();

  drawSprites();
 
}




