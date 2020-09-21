const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(230,200,60,60)
    var ground_options ={ isStatic: true }
    ground = Bodies.rectangle(200,390,200,20,ground_options); World.add(world,ground)

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER); rect(400,ground.position.y,800,20);
    box1.display();
   box2.display();
}