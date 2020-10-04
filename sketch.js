var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3
var background;
var gameState, DROP,PLAY;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backgroundIMG = loadImage("maxresdefault.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/4, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3
	packageSprite.velocityX = 2
	packageSprite.visible = false;
  
	

	helicopterSprite=createSprite(width/4, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1
	helicopterSprite.velocityX = 2
	

	groundSprite=createSprite(width/2, height-30, width,10);
	groundSprite.shapeColor=color(255)

	box1 = createSprite(width/2, height-25, 250,20);
	box1.shapeColor = "red"
	box1.scale=1
	box2 = createSprite(width/3, height-115, 20,200);
	box2.shapeColor = "red"
	box2.scale=1
	box3 = createSprite(width/1.5, height-115, 20,200);
	box3.shapeColor = "red"
	box3.scale=1

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.75, isStatic:true});
	packageBody.visible = false;
	World.add(world, packageBody);
	

	//Create a Ground
	box1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box1);
	 box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, box2);
	 box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, box3);
gameState = PLAY

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundIMG);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed()
  drawSprites();
  if(helicopterSprite.x === width/2){
	helicopterSprite.velocityX = 0
	gameState = DROP
  }
 
}

function keyPressed() {
 if(gameState === DROP){
	if (keyCode === DOWN_ARROW) {
	packageBody.visible = true;
	packageSprite.visible = true;
	Matter.Body.setStatic(packageBody, false);
 }
}
}


