// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

var bg1, bg2, bg3

var elizabeth

var obs1, obs2, obs3, obs4, obs5, obs6, obs7, obs8, obs9, obs10, obs11
var invisibleGround
var score = 0
var turtle
//var mute, unmute

function preload(){
  bg1 = loadImage("images/park1.png");
  bg2 = loadImage("images/park2.png");
  bg3 = loadImage("images/stage.png");

  eliImage = loadAnimation("images/eli1.png", "images/eli2.png");
  eli2Image = loadAnimation("images/eli3.png");
  eli3Image = loadAnimation("images/eli3.png");

  obs1Image = loadImage("images/animal1.png");
  obs2Image = loadImage("images/bottle.png");
  //obs3Image = loadImage("images/ball1.png");
  // obs4Image = loadImage("images/duck.png");
  // obs5Image = loadImage("images/bow.png");
  // obs6Image = loadImage("images/slipper.png");
  // obs7Image = loadImage("images/doll.png");
  // obs8Image = loadImage("images/cork.png");
  // obs9Image = loadImage("images/paperPlane.png");
  // obs10Image = loadImage("images/leaf.png");
  // obs11Image = loadImage("images/leaf2.png");

  music = loadSound("TurtleCrusher.mp3");
  }

//Function to set initial environment
function setup() {
  createCanvas(1500,700);
 // engine = Engine.create();
 // world = engine.world;

  park1 = createSprite(750,350);
  park1.addImage(bg1);
  park2 = createSprite(750,350);
  park2.addImage(bg2);
  park2.visible = false;
  stage = createSprite(750,350);
  stage.addImage(bg3);
  stage.visible = false;
 
  elizabeth = createSprite(50,600);
  elizabeth.addAnimation("elirunning", eliImage);
  elizabeth.addAnimation("elijumping", eli2Image);
  elizabeth.addAnimation("elistanding", eli3Image);
  elizabeth.scale = 2
  elizabeth.velocityX = 5;
  elizabeth.debug = false;
  elizabeth.setCollider("rectangle", 0, 0, 65,150);

  // mute = createImg("mute button.png");
  // mute.position(1400,100);
  // mute.size(50,50);
  // mute.mouseClicked(muteMusic);

  // unmute = createImg("unmute button.png");
  // unmute.position(1400,50);
  // unmute.size(50,50);
  // unmute.mouseClicked(unmuteMusic);


  invisibleGround = createSprite(750,650,1700,15);
  invisibleGround.visible = false;

  textSize(20); 
}

// function to display UI
function draw() {

 //music.play()

  if(elizabeth.x > 1500){
    park2.visible = true;
    elizabeth.x = 10;
  }

  if(keyDown("space")){
    elizabeth.velocityY = -7;
    elizabeth.changeAnimation("elijumping", eli2Image);
  }
  elizabeth.changeAnimation("elirunning");
  elizabeth.velocityY = elizabeth.velocityY+0.2;
  elizabeth.collide(invisibleGround);
  //obs1.collide(invisibleGround);
  console.log(elizabeth.y)

    spawnObstacles();

  if(elizabeth.isTouching(obs1)){
    elizabeth.changeAnimation("elistanding");
    elizabeth.velocityX = 0;
  }

  drawSprites();
  stroke("black");
  text("Score = " + score, 1400,680);

}

function spawnObstacles(){
  if(frameCount % 70 === 0){
  obs1 = createSprite(random(500,1400),550);
  obs1.scale = 0.4;
  obs1.debug = false;
  obs1.lifetime()

  //obs1.setCollider("rectangle", 0, 0, 140,50);

  // obs2 = createSprite(1000,550);
  // obs2.addImage(obs2Image);
  // obs2.scale = 0.4;
  var i = Math.round(random(1,7))
  switch(i){
    case 1 : obs1.addImage(obs1Image);
    break;
    case 2 : obs1.addImage(obs2Image);
    break;
    // case 3 : obs1.addImage(obs3Image);
    // break;
    // case 4 : obs1.addImage(obs4Image);
    // break;
    // case 5 : obs1.addImage(obs5Image);
    // break;
    // case 6 : obs1.addImage(obs6Image);
    // break;
    // case 7 : obs1.addImage(obs7Image);
    //break;
    default:
    break;
  }
  }
}

function muteMusic(){
  music.stop();
}
function unmuteMusic(){
  music.play();
}