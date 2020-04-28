// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var ground;
var rectangle1;
var rectangle2;
var head;
var shooter;
var canonball;
var background;
var x = 360;
var gameState = "start";

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,500,2400,30);
    rectangle1 = new Tanker(150, 470,250,40);
    rectangle2 = new Tanker(150,430,250,40);
  
    fill("red");
    shooter = new Tanker(290,380,80,30);
   
}

function draw() {
    background("white");
   
// Remember to update the Matter Engine and set the background.

Engine.update(engine);
head = ellipse(150,420,230,230);
ground.display();
rectangle1.display();
rectangle2.display();
shooter.display();
head.display();

}

function keyPressed() { 
    if(keyCode === 32){
    gameState = "launched";
    canonball = new CanonBall(x,370,40);
    canonball.display();
    canonball.body.speed =  2;

        }
    }




