
var trex ,trex_running;
var ground
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,180,30,50)
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5

   ground = createSprite(300,200,600,20)
}

function draw(){
  background("lightblue");

 if(keyDown("space")){
   trex.velocityY=-10
 }
 trex.velocityY=trex.velocityY+0.75
  trex.collide(ground);
  


 drawSprites();
}
