var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var orangeLeafImg;
var redImg;
var leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redImg=loadImage("redImage.png");
  leafImg=loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

rabbit.x = World.mouseX;

spawnApples();

spawnOrangeLeaf();

spawnRedImage();

spawnLeafImage();

  drawSprites();
}
function spawnApples(){
  if(frameCount % 80 === 0){
    apple = createSprite(80,250,40,10);
    apple.addImage(appleImg);
    apple.y = Math.round(random(10,60))
    apple.scale = 0.05;
    apple.velocityY = 3;
    apple.depth = rabbit.depth
    rabbit.depth=rabbit.depth+1;
  }
}
function spawnOrangeLeaf(){
  if(frameCount % 80 === 0){
    orangeLeaf = createSprite(160,300,40,10);
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.y = Math.round(random(10,60))
    orangeLeaf.scale = 0.05;
    orangeLeaf.velocityY = 3;
    orangeLeaf.depth = rabbit.depth
    rabbit.depth=rabbit.depth+1;
  }
}
function spawnRedImage(){
  if(frameCount % 80 === 0){
    red = createSprite(250,130,40,10);
    red.addImage(redImg);
    red.y = Math.round(random(10,60))
    red.scale = 0.05;
    red.velocityY = 3;
    red.depth = rabbit.depth
    rabbit.depth=rabbit.depth+1;
  }
}
function spawnLeafImage(){
  if(frameCount % 80 === 0){
    leaf = createSprite(380,230,40,10);
    leaf.addImage(leafImg);
    leaf.y = Math.round(random(10,60))
    leaf.scale = 0.05;
    leaf.velocityY = 3;
    leaf.depth=rabbit.depth
    rabbit.depth=rabbit.depth+1
  }

}