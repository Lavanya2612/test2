const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;


var form, player, game;

function preload(){
  img1= loadImage('images/capture1.png') 


}


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  engine = Engine.create();
  world = engine.world;
  //database = firebase.database();
 form=new Form()

 form1=new Instructions()
  game1= new Game (displayWidth/2 -630,displayHeight/2 +100,200,20)
  

  girl= createSprite(displayWidth/2 -630,displayHeight/2 -300,100,100)
}


function draw(){
  background(0)
  Engine.update(engine);
  if(gameState===0){
      form.display()
  }

  if(gameState===1){
    form1.display()
}

if(gameState===2){
  game1.display()
  //game2.display()

  
  girl.addImage(img1)
}

drawSprites()
}

function keyPressed(){

  if(keyCode===UP_ARROW){
      girl.y= girl.y -10
  }

  
  
  }
