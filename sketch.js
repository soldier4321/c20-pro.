var player1, player_running,runner1 ;
var ground, groundImage,invisibleleft,invisibleright;
var energy,coin,bomb,Over;
var bomb_Img,coin_Img,en_Img,End_run,over_Img;
 var select_opt;
var bomb2Group,energy2Group,coin2Group;
 var score=0;
var gameState='Play';
function preload() {
  player_running = loadAnimation("Runner-1.png", "Runner-2.png");
 groundImage = loadImage("path.png")
 bomb_Img = loadImage("bomb.png")
 coin_Img = loadImage("coin.png")
 en_Img = loadImage("energyDrink.png")
End_run=loadImage("Runner-1.png")
over_Img=loadImage("gameOver.png")
}

function setup() {
  createCanvas(600, 600);
  ground = createSprite(300,200,400,400);
  ground.addImage("ground",groundImage);
  ground.scale=2
  ground.velocityY = 4;
  player1 = createSprite(300,560,20,50);
  player1.addAnimation("running", player_running);
 player1.scale=0.1;
 invisibleleft = createSprite(600,300,60,600);
 invisibleleft.visible=false
 invisibleright = createSprite(-25,300,80,600);
 invisibleright.visible=false
 bomb2Group=createGroup();  
 coin2Group=createGroup();
 energy2Group=createGroup();
}

function draw() {
 if(gameState=='Play'){
  background('red');
  createEdgeSprites();
  if (ground.y>600) {
  ground.y = ground.width / 2;
   }
   player1.x=World.mouseX
  player1.bounceOff(invisibleleft)
  player1.bounceOff(invisibleright)
  if(coin2Group.isTouching(player1)){
   score=score+4;
    coin2Group.destroyEach()
    
   }
  if(bomb2Group.isTouching(player1)){
    gameState='End';
    bomb2Group.destroyEach()
   }
  if(energy2Group.isTouching(player1)){
   score=score+2;
    energy2Group.destroyEach()
    
   }
 select_opt = Math.round(random(1,3));
   
  if (World.frameCount % 100 == 0) {
    if (select_opt == 1) {
     bomb1();
    } else if (select_opt == 2) {
     coin1();
    }  else {
     energy1();
    }
  }  
 }
if(gameState==='End'){
  fill("red")
  text("PRESS UP ARROW TO RESTART",300,200); 
  ground.velocityY = 0;
 runner1 = createSprite(300,300,20,50);
  runner1.addAnimation("sprinting", End_run);
 runner1.scale=0.1;
 player1.visible=false;
 
 
 
  Over = createSprite(300,400,400,400);
   Over.addImage("gaming",over_Img);
   Over.scale=1
 coin2Group.destroyEach();
        bomb2Group.destroyEach();
        energy2Group.destroyEach();
        
        
        coin2Group.setVelocityYEach(0);
        bomb2Group.setVelocityYEach(0);
        energy2Group.setVelocityYEach(0);
   
  
}

 drawSprites();
 text("Score: "+ score, 500,50);
}
function bomb1() {
   bomb = createSprite(Math.round(random(60, 550)),0, 10, 10);
  bomb.addImage(bomb_Img);
  bomb.velocityY = 3;
  bomb.lifetime = 200;
  bomb.scale = 0.1;
 bomb2Group.add(bomb)
}

function coin1() {
   coin = createSprite(Math.round(random(60, 550)),0, 10, 10);
  coin.addImage(coin_Img);
  coin.velocityY = 3;
  coin.lifetime = 200;
  coin.scale = 0.5;
  coin2Group.add(coin)
}

function energy1() {
   energy = createSprite(Math.round(random(60, 550)),0, 10, 10);
  energy.addImage(en_Img);
  energy.velocityY = 3;
  energy.lifetime = 200;
  energy.scale = 0.1;
  energy2Group.add(energy)
}

