var bg,bgImg;
var rabbit, dog;
var carrot, obj1, obj2, obj3, obj4;
var p1, p2, p3, ground, table;
var obj1Img,obj2Img;
var obstaclesGroup, limitsGroup;

//hacer variables para el conejo estatico mirando hacia la derecha e izquierda, y zanahoria
// hacer variable para animacion del conejo brincando


function preload(){

  bgImg = loadImage("assets/Kitchen.png");
  obj1Img = loadImage("assets/Obs_1.png");
  obj2Img = loadImage("assets/Obs_2.png");

  //precargar las imagenes del conejo estatico

  //hacer la animacion para el conejo saltando
  caballeroImgMA = loadAnimation(
    "assets/caballero ataque 1.png",
    "assets/caballero ataque 2.png",
    "assets/caballero ataque 3.png",
    "assets/caballero ataque 4.png",
    "assets/caballero ataque 5.png",
    "assets/caballero ataque 6.png",
    "assets/caballero ataque 7.png",
    "assets/caballero ataque 8.png",
    "assets/caballero ataque 9.png",
  );
}

function setup() {

  createCanvas(1400,720);


  ground = createSprite(width/2,height-50,width,20);
  //ground.x = ground.width /2;

  //creando el sprite del jugador 
  rabbit = createSprite(50, height-500, 50, 50);
  //rabbit.addImage(shooterImg);
  //rabbit.scale = 0.3;
  rabbit.debug = true;
  rabbit.setCollider("rectangle",0,0,50,50);

  //creando sprites de objetos invisibles
  p1 = createSprite(0,height/2,10,height);
  p2 = createSprite(width,height/2,10,height);
  p3 = createSprite(width/2,0,width,10);
  table = createSprite(width/2, height-150, 720,220);
  //Haciendo invisibles los sprites de los obstaculos
  p1.visible = false;
  p2.visible = false;
  p3.visible = false;
  table.visible = false;

  //crear sprites de objetos de interaccion
  obj1 = createSprite(width/2-250, height-300, 50,50);
  obj2 = createSprite(width/2+250, height-300, 50,50);

  //Agregar sprites de zanahoria y ponerle su imagen

  //agregando imagenes a los sprites
  obj1.addImage(obj1Img);
  obj2.addImage(obj2Img);

  

  //grupo de obstaculos para colision
  limitsGroup = new Group();

  limitsGroup.add(p1);
  limitsGroup.add(p2);
  limitsGroup.add(p3);
  limitsGroup.add(table);

}

function draw() {
  background(bgImg); 
  rabbit.collide(limitsGroup);

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



