const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionHeight = 300;
var particle = [];
var ground;
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 790);

  for (var j = 40; j <= width; j = j + 40) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 40) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 40) {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 15; j <= width - 10; j = j + 40) {
    plinkos.push(new Plinko(j, 375));
  }
  for (var k = 0; k <= width; k = k + 90) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();

  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  
  for (var j =0; j<particle.length; j++){
    particle[j].display();
  } 
  for (var k =0; k<divisions.length; k++){
    divisions[k].display();
  }
  for (var j =0; j<plinkos.length; j++){
    plinkos[j].display();
  }

 
}