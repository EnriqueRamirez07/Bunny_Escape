var bg,bgImg;
var rabbit, dog;
var carrot, obj1, obj2, obj3, obj4;
var p1, p2, p3, ground, table;


function preload(){

  bgImg = loadImage("assets/Kitchen.png")

}

function setup() {

  createCanvas(windowWidth,windowHeight);


  ground = createSprite(windowWidth /2,windowHeight-100,windowWidth,20);
  //ground.x = ground.width /2;

  

  //creando el sprite del jugador 
  rabbit = createSprite(20, displayHeight-300, 50, 50);
  //rabbit.addImage(shooterImg);
  //rabbit.scale = 0.3;
  rabbit.debug = true;
  rabbit.setCollider("rectangle",0,0,50,50);

}

function draw() {
  background(bgImg); 

  //moviendo al jugador arriba y abajo: volviéndolo compatible con juegos mobiles a traves de entrada táctil
  if(keyDown("LEFT_ARROW")){
    rabbit.x = rabbit.x-30;
  }
  if(keyDown("RIGHT_ARROW")){
    rabbit.x = rabbit.x+30;
  }

  if(keyDown("UP_ARROW")){
    rabbit.velocityY = -12;
  }

  rabbit.velocityY = rabbit.velocityY + 0.8;

  rabbit.collide(ground);

  drawSprites();
}



