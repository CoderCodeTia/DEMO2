
  var groundImage;
  var arrow1;
  var balloonred,balloon_flyingred;
  var balloonpink,balloon_flying2;
  var balloongreen,balloon_flying3;
  var balloonblue,balloon_flying4;
  var bow1;
  var score=0;
  var rightwall
  var leftwall
  var topwall
  var bottomwall

function preload(){
   
  bow1=loadImage("bow0.png");
  
  arrow1=loadImage("arrow0.png");
  
  groundImage=loadImage("background0.png");

  groundImage2=loadImage("background0.png");

 flyingred=loadImage("red_balloon0.png");
 flyingpink=loadImage("pink_balloon0.png");
 flyinggreen=loadImage("green_balloon0.png");
 flyingblue=loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(600, 600);
  //add code here
  
  
 
  
  ground2=createSprite(200,200,400,400);
  ground2.addImage("backround",groundImage2);
  ground2.scale=2.8;

  
  ground=createSprite(400,200,400,400);
  ground.addImage("backround",groundImage);
  ground.scale=2.3;
  ground.velocityX=-2;
  ground.x = ground.width/2;
  
   leftwall=createSprite(7,1,15,1500)
  leftwall.shapeColor=color(15,90,55)
  
  rightwall=createSprite(593,599,15,1500)
  rightwall.shapeColor=color(15,90,55)
  
  topwall=createSprite(1,7,1500,15)
  topwall.shapeColor=color(15,90,55)
  
  bottomwall=createSprite(599,593,1500,15)
  bottomwall.shapeColor=color(15,90,55)
    
  bow = createSprite(470,240,20,20);
  bow.addImage("shoot",bow1);
  bow.scale=1.6;
  
  arrowmove();
  
  
  arrowGroup=new Group();
  
  redballoonGroup=new Group();
  
  pinkballoonGroup=new Group();
  
  greenballoonGroup=new Group();
  
  blueballoonGroup=new Group();
  

}

  function draw() {
     background("white");


     var selectloon =Math.round(random(1,4)) ;

     spawnballoonred();
     spawnballoonpink();
     spawnballoongreen();
     spawnballoonblue();



    
    bow.y=mouseY;

    if(ground.x<150){
    ground.x = ground.width/1;
    }



    ground2.depth=score.depth;
    ground.depth=score.depth;
    score.depth=score.depth+1;
  
    arrowmove();

  if(arrowGroup.isTouching(redballoonGroup)){
    redballoonGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  else if(arrowGroup.isTouching(pinkballoonGroup)){
   pinkballoonGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+8;
  }
  else if(arrowGroup.isTouching(greenballoonGroup)){
    greenballoonGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }     
  else if(arrowGroup.isTouching(blueballoonGroup)){
    blueballoonGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+10;
  }
    
    //add code here
    drawSprites();
  
    fill("blue")
    textSize(25);
    text("Score :- "+score,270,50);

}

function arrowmove(){
    
    arrow=createSprite(450,240,100,20);
    arrow.addImage("arrow",arrow1);
    arrow.scale=0.3;
    arrow.y=bow.y; 
    arrow.visible=false;
  
    if(keyWentDown("space")){ 
    arrow.velocityX=-7;
    arrow.visible=true;
    arrowGroup.add(arrow);
  }
  
   arrow.lifeTime=50;
}



function spawnballoonred(){
    if(frameCount % 100==0){
    balloonred =createSprite(30,200,20,20);
    balloonred.addImage("flying",flyingred)
    balloonred.scale=0.12;
    balloonred.velocityX=3;
    balloonred.y=Math.round(random(200,500))
    balloonred.lifeTime=150;
    redballoonGroup.add(balloonred);
    balloonred.setCollider("circle",0,-50,100);
    }
}

function spawnballoonpink(){
    if(frameCount % 170==0){
    balloonpink = createSprite(100,200,20,20);
    balloonpink.addImage("flying",flyingpink)
    balloonpink.scale=1.41;
    balloonpink.velocityX=3;
    balloonpink.y=Math.round(random(200,500))
    balloonpink.lifeTime=150;
    pinkballoonGroup.add(balloonpink);
    balloonpink.setCollider("circle",0,-10,10);
    }
}

function spawnballoongreen(){
    if(frameCount % 260==0){
    balloongreen = createSprite(150,200,20,20);
    balloongreen.addImage("flying",flyinggreen)
    balloongreen.scale=0.13;
    balloongreen.velocityX=3;
    balloongreen.y=Math.round(random(200,500))
    balloongreen.lifeTime=150;
    greenballoonGroup.add(balloongreen);
     balloongreen.setCollider("circle",0,20,60); 
    }
}
   
function spawnballoonblue(){
    if(frameCount % 350==0){
    balloonblue = createSprite(200,240,50,50);
    balloonblue.addImage("flying",flyingblue)
    balloonblue.scale=0.13;
    balloonblue.velocityX=3;
    balloonblue.y=Math.round(random(200,500))
    balloonblue.lifeTime=150;
    blueballoonGroup.add(balloonblue);
    balloonblue.setCollider("circle",0,20,60);
    }
}