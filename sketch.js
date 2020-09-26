const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,50,50);
    box2 = new Box(800,300,50,50);
    pig1 = new pig (700,300)
    log1 = new log(700,260,300,PI/2)
    box3 = new Box(600,200,50,50)
    box4 = new Box(800,200,50,50)
    pig2 = new pig(700,200)
    log2 = new log(700,160,300,PI/2)
    box5 = new Box(700,100,50,50)
    log3 = new log(695,100,100,PI/7)
    log4 = new log(703,100,100,-PI/7)
    bird1 = new bird(20,20)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}