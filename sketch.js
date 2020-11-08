const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var box1;
var leftSprite,middleSprite,rightSprite
var ground;
var dustbin

function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,690,800,20)
    box1 = new Paper(100,670);
    dustbin=new Dustbin(690,670)
  
}


function draw() {

  
  background("pink");
  Engine.update(engine)
  ground.display();
  box1.display();
  dustbin.display();
  drawSprites();
 
}
function keyPressed() {
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(box1.body,box1.body.position,{x:85,y:85})
  }
}


