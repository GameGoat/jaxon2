var jaxon,jaxonImg
var road, invisibleRoad

function preload(){
  //pre-load images
  roadImg.loadImages("path.png");
  jaxonImg.loadAnimation("Runner1.png","Runner2.png")
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  jaxon = createSprite(200,200,20,20);
  road = createSprite(200,200);
  road.addImage("path.png",roadImg);
  road.velocityY = 4;
  road.scale = 1.2;
  jaxon = createSprite(200,200,20,20)
  jaxon.addImage(jaxonImg)
  jaxon.addAnimation("running", jaxonImg)
  invisibleRoad = createSprite(400,0,20,20)
  invisibleRoad.visible = false
  invisibleRoad = createSprite(-400,0,20,20)
  invisibleRoad.visible = false
}

function draw() {
  background(0);
  if (road.y > 400){
    road.y = height/2;
     jaxon.collide(invisibleRoad)       
    mouseX = jaxon

    }  
  }

drawSprites()