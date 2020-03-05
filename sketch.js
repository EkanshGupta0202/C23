const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var r1, r2, r3, r4;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  r1 = new Rect(100,200,30,200);
  r2 = new Rect(150,200,30,200);
  r3 = new Rect(200,200,30,200);
  r4 = new Rect(250,200,30,200);
  r5 = new Rect(174,85,200,30);
}

function draw() {
  background(0);  
  Engine.update(engine);
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  triangle(73+5, 70, 103+5, 10, 133+5, 70);
  triangle(133+5, 70, 163+5, 10, 193+5, 70);
  triangle(193+5, 70, 223+5, 10, 255, 70);
}