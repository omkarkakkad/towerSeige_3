const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand1,stand2;
var ground;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,
block13,block14,block15,block16;

var blocks1,blocks12,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9;

var polygon_Image;
var slingShot;
var ball;

var score = 0;

function preload(){
    polygon_Image = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    stand1 = new Stand(390,652,260,15);
    stand2 = new Stand(837,532,213,15);

    block1 = new Box(300,620,30,50);
    block2 = new Box(330,620,30,50);
    block3 = new Box(360,620,30,50);
    block4 = new Box(390,620,30,50);
    block5 = new Box(420,620,30,50);
    block6 = new Box(450,620,30,50);
    block7 = new Box(480,620,30,50);

    block8 = new Box(330,570,30,50);
    block9 = new Box(360,570,30,50);
    block10 = new Box(390,570,30,50);
    block11 = new Box(420,570,30,50);
    block12 = new Box(450,570,30,50);

    block13 = new Box(360,520,30,50);
    block14 = new Box(390,520,30,50);
    block15 = new Box(420,520,30,50);

    block16 = new Box(390,470,30,50);

    blocks1 = new Box(780,500,30,50);
    blocks2 = new Box(810,500,30,50);
    blocks3 = new Box(840,500,30,50);
    blocks4 = new Box(870,500,30,50);
    blocks5 = new Box(900,500,30,50);

    blocks6 = new Box(810,450,30,50);
    blocks7 = new Box(840,450,30,50);
    blocks8 = new Box(870,450,30,50);

    blocks9 = new Box(840,400,30,50);

    ground = new Ground(600,690,1205,20);

    ball = Bodies.circle(100,450,15);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:150,y:450});
    
}

function draw(){
    background("brown");
    Engine.update(engine);

    textSize(25);
    stroke("blue");
    strokeWeight(3);
    fill("white");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",80,50);

    strokeWeight(3);
    stroke(5);

    strokeWeight(5);
    stroke("black");
    textSize(35);
    fill("white");
    text("Score "+score,width-200,100);

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    blocks1.score();
    blocks2.score();
    blocks3.score();
    blocks4.score();
    blocks5.score();
    blocks6.score();
    blocks7.score();
    blocks8.score();
    blocks9.score();
    
    stand1.display();
    stand2.display();

    strokeWeight(4);
    stroke(5);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("cyan");
    block13.display();
    block14.display();
    block15.display();

    fill("grey");
    block16.display();

    fill("skyblue");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();

    fill("cyan");
    blocks6.display();
    blocks7.display();
    blocks8.display();

    fill("pink")
    blocks9.display();

    ground.display();

    imageMode(CENTER)
    image(polygon_Image ,ball.position.x,ball.position.y,50,50);
   
    slingShot.display();
    
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingShot.attach(this.ball);
    }
}

async function getdaynightcolor(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
}