const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stand1;
var polygon;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;
var block18;
var block19;
var block20;
var block21;
var block22;
var block23;
var block24;
var block25;
var block26;
var block27;
var block28;
var block29;
var block30;
var block31;
var block32;
var sling1;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	

	engine = Engine.create();
	world = engine.world;

	
    //level 1
    block1 = new Block(300, 275, "lightblue");
    block2 = new Block(330, 275, "lightblue");
    block3 = new Block(360, 275, "lightblue");
    block4 = new Block(390, 275, "lightblue");
    block5 = new Block(420, 275, "lightblue");
    block6 = new Block(450, 275, "lightblue");
    block7 = new Block(480, 275, "lightblue");
    //level 2
    block8 = new Block(330, 235, "pink");
    block9 = new Block(360, 235, "pink");
    block10 = new Block(390, 235, "pink");
    block11 = new Block(420, 235, "pink");
    block12 = new Block(450, 235, "pink");
    //level 3
    block13 = new Block(360, 195, "aqua");
    block14 = new Block(390, 195, "aqua");
    block15 = new Block(420, 195, "aqua");
    //top
    block16 = new Block(390, 155, "gray"); 
    //level 1
    block17 = new Block(700, 275, "lightblue");
    block18 = new Block(730, 275, "lightblue");
    block19 = new Block(760, 275, "lightblue");
    block20 = new Block(790, 275, "lightblue");
    block21= new Block(820, 275, "lightblue");
    block22 = new Block(850, 275, "lightblue");
    block23 = new Block(880, 275, "lightblue");
    //level 2
    block24 = new Block(730, 235, "pink");
    block25 = new Block(760, 235, "pink");
    block26 = new Block(790, 235, "pink");
    block27 = new Block(820, 235, "pink");
    block28 = new Block(850, 235, "pink");
    //level 3
    block29 = new Block(760, 195, "aqua");
    block30 = new Block(790, 195, "aqua");
    block31 = new Block(820, 195, "aqua");
    //top
    block32 = new Block(790, 155, "gray"); 
    //Platform 1
    stand1 = new Ground(390, 300, 260, 10);
    //Platform 2
    stand2 = new Ground(790, 300, 260, 10);
    //the polygon
    polygon = new Polygon(100, 240, 30);
    //the sling
	  sling1 = new Sling(polygon.body, {x: 100, y: 240});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    polygon.display();
    stand1.display();
    stand2.display();
    
	  sling1.display();


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  sling1.fly();

}

function keyPressed(){
if(keyCode === 32){
   sling1.attach(polygon.body);
}
}
