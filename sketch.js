var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(800, 600, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(800, 200, 80, 30);
  movingRect.shapeColor = "green";

  object1 = createSprite(100, 100, 50, 50);
  object1.shapeColor = "green";

  object2 = createSprite(200, 100, 50, 50);
  object2.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0, 0, 0);  

  bounceOff(movingRect, fixedRect);
  drawSprites();
}

function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }
}