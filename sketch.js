const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drops;
var umbrella;
var maxDrops = 100;
var thunder1, thunder2, thunder3, thunder4;

function preload(){
    thunder1 = loadImage("images/1.png");
  thunder2 = loadImage("images/2.png");
  thunder3 = loadImage("images/3.png");
  thunder4 = loadImage("images/4.png");  
}

function setup(){
    canvas = createCanvas(1000,400);  
    engine = Engine.create();
	world = engine.world;

    umbrella = new Umbrella(470, 330, 20, 90);
}

function draw(){
thunderDisplay();
 
for(var i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,400), random(0,400)));
}

    drops.display();
    umbrella.display();
    drawSprites();
}   

function thunderDisplay(){
        if(frameCount % 12 === 0) {
          var thunder = createSprite(600,300,10,40);
          var rand = Math.round(random(1,4));
          switch(rand) {
            case 1: thunder.addImage(thunder1);
                    break;
            case 2: thunder.addImage(thunder2);
                    break;
            case 3: thunder.addImage(thunder3);
                    break;
            case 4: thunder.addImage(thunder4);
            default : break;
                      }
                    }
                }