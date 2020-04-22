//sprites
var trex, trexrunning, ground, groundimage, invisibleground,obstacle1, obstacle2, obstacle3, obstacle4, cloud, gameOver, restart, gameover, rEsTaRt, count = 0, CloudGroup, ObstaclesGroup;

//making gamestates
//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

//creating animation
function preload(){
trexrunning = loadAnimation("trex1.png","trex3.png","trex4.png");
groundimage = loadImage("ground2.png");
  gameover = loadImage("gameOver.png")
  rEsTaRt = loadImage("restart.png")
}
//creating sprite
function setup() {
  createCanvas(400, 400);
trex = createSprite(70,350,20,20);
trex.addAnimation("trex", trexrunning)
trex.scale = 0.5;
ground = createSprite(200,380,400,20);
 ground.addImage("ground", groundimage);
 invisibleground = createSprite(200,380,400,20)
   invisibleground  .  visible = false
 
  
  
  
  
  
  
  
  
  
  //creating gameover sprites
//place gameOver and restart icon on the screen
 gameOver = createSprite(200,300);
 restart = createSprite(200,340);
gameOver.addImage("gameOver", gameover);
gameOver.scale = 0.5;
restart.addImage("restart", rEsTaRt);
restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible =false;
}


function draw() {
  //set background to white
  background("white");
  //display score
  text("Score: "+ count, 250, 100);
 trex.collide(invisibleground) 
  
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
    count =   Math.round(count + 0.1);
    
    if (count>0 && count%100 === 0){
      playSound("checkPoint.mp3");
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
     //jump when the space key is pressed
    if(keyDown("space") ){
      trex.velocityY = -12 ;
      //playSound("jump.mp3");
    }
  
    //add gravity
    trex.velocityY = trex.velocityY + 0.8;
    
    //spawn the clouds
    //spawnClouds();
  
    //spawn obstacles
    ////////\\\\\\\\\\\\\spawnObstacles();
    
    //End the game when trex is touching the obstacle
    //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/if(ObstaclesGroup.isTouching(trex)){
     //////// playSound("jump.mp3");
      //gameState = END;
      ///playSound("die.mp3");
    
}
  
  
 else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
   // ObstaclesGroup.setVelocityXEach(0);
   // CloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
   // trex.setAnimation("trex_collided");
    
    //set lifetime of the game objects so that they are never destroyed
   // ObstaclesGroup.setLifetimeEach(-1);
   // CloudsGroup.setLifetimeEach(-1);
    
    
  
  
  if(mousePressedOver(restart)) {
    //reset();
  
  }
 }

  //console.log(trex.y);
  
  //stop trex from falling down
 
  drawSprites();
  
}
