var knife;

var score ; 

var bg;

var play = 1;
var end = 0;

var gamestate = play; 
var gameover;
var f1g,f2g,f3g,f4g,e1g,e2g,f1,f2,f3,f4,e1,e2;

var knifeImg,f1Img,f2Img,f3Img,f4Img,enemyImg1,enemyImg2,bgImg,GoverImg;


function preload(){
  knifeImg = loadImage("sword.png"); 
  f1Img = loadImage("fruit1.png");
  f2Img = loadImage("fruit2.png"); 
  f3Img = loadImage("fruit3.png"); 
  f4Img = loadImage("fruit4.png"); 
  enemyImg1 = loadImage("alien1.png");
  enemyImg2 = loadImage("alien2.png"); 
  GoverImg = loadImage("gameover.png") 
  cut = loadSound("knifeSwoosh.mp3");
  over = loadSound("gameover.mp3");
  }

function setup(){
  createCanvas(600,600);

  knife = createSprite(300,300,20,20);
  knife.addImage("knife",knifeImg);
  knife.scale = 0.7
  knife.setCollider("circle",18,-25,36);

  f1g = createGroup(); 
  f2g = createGroup();
  f3g = createGroup();  
  f4g = createGroup();
  e1g = createGroup();
  e2g = createGroup();  
  Gover = createSprite(300,300,10,10);
  Gover.visible = false;

  score = 0;  
  
}

function draw(){
  background("maroon");
  

  
if(gamestate === play){ 

  fill("white");
  textSize(15);
  text("SCORE: " + score, 500,30);  
  
  createFruits();  
  
  knife.x = mouseX;
  knife.y = mouseY;
  
  
if(knife.isTouching(f1g)){
  f1g.destroyEach();
  score = score + 5;
  cut.play();
}
if(knife.isTouching(f2g)){
  f2g.destroyEach();
  score = score + 10;
  cut.play();
}
if(knife.isTouching(f3g)){
  f3g.destroyEach();
  score = score + 3;
  cut.play();
}
if(knife.isTouching(f4g)){
  f4g.destroyEach();
  score = score + 3;
  cut.play();
}
if(knife.isTouching(e1g)){
  gamestate = end;
  knife.destroy();
  over.play();
}
if(knife.isTouching(e2g)){
  gamestate = end;
  knife.destroy()
  over.play();
}
}

if(gamestate === end){
  Gover.visible = true;
  Gover.addImage("game over",GoverImg)
  Gover.scale = 2.3;
  
}

drawSprites();
}


function createFruits(){
 if(frameCount % 60 === 0){
   spawn = Math.round(random(1,12));
   if(spawn === 1){
     bannana();
   }
   if(spawn === 2){
     apple();
   }
   if(spawn === 3){
     pineapple();
   }
   if(spawn === 4){
     grapes();
   }
   if(spawn === 5){
     enemy1();
   }
   if(spawn === 6){
     enemy2();
   }
   if(spawn === 7){
     bannana();
     f1.x = -1
     f1.velocityX = (10 + 3 * score/10);
   }
   if(spawn === 8){
     apple();
     f2.x = -1
     f2.velocityX = (10 + 3 * score/10);
   }
   if(spawn === 9){
     pineapple();
     f3.x = -1
     f3.velocityX = (10 + 3 * score/10);
   }
   if(spawn === 10){
     grapes();
     f4.x = -1
     f4.velocityX= (10 + 3 * score/10);
   }
   if(spawn === 11){
     enemy1();
     e1.x = -1
     e1.velocityX = (10 + 3 * score/10);
   }
   if(spawn === 12){
     enemy2();
     e2.x = -1
     e2.velocityX = (10 + 3 * score/10);
   }
 }
}

function bannana(){
  f1 = createSprite(680,200,10,10);
  f1.y = Math.round(random(10,550));
  f1.velocityX = -(10 + 3 * score/10);
  f1.addImage("fruit1",f1Img);
  f1.scale = 0.3;
  f1g.add(f1);
  f1.lifetime = 60;  
} 
function apple(){
  f2 = createSprite(680,200,10,10);
  f2.y = Math.round(random(10,550));
  f2.velocityX = -(10 + 3 * score/10);
  f2.addImage("fruit2",f2Img);
  f2.scale = 0.3;
  f2g.add(f2);
  f2.lifetime = 60;
}  
function pineapple(){
  f3 = createSprite(680,200,10,10);
  f3.y = Math.round(random(10,550));
  f3.velocityX = -(10 + 3 * score/10);
  f3.addImage("fruit3",f3Img);
  f3.scale = 0.3;
  f3g.add(f3);
  f3.lifetime = 60;
}  
function grapes(){
  f4 = createSprite(680,200,10,10);
  f4.y = Math.round(random(10,550));
  f4.velocityX = -(10 + 3 * score/10);
  f4.addImage("fruit4",f4Img);
  f4.scale = 0.3;
  f4g.add(f4); 
  f4.lifetime = 60;
} 

function enemy1(){
  e1 = createSprite(680,200,10,10);
  e1.y = Math.round(random(10,550));
  e1.velocityX = -(10 + 3 * score/10);
  e1.scale = 1.9; 
  e1.addImage("enemy",enemyImg1);
  e1g.add(e1);
  e1.lifetime = 60;
}  
function enemy2(){
  e2 = createSprite(680,200,10,10);
  e2.y = Math.round(random(10,550));
  e2.velocityX = -(10 + 3 * score/10);
  e2.scale = 1.9; 
  e2.addImage("enemy",enemyImg2);
  e2g.add(e2);
  e2.lifetime = 60;
}  

