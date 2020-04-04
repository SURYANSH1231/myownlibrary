var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(100, 200, 50, 80);
 movingRect= createSprite(900,200, 80, 30);
 fixedRect.shapeColor ="green";
 movingRect.shapeColor ="green";
fixedRect.velocityX=5;
movingRect.velocityX=-6;
}

function draw() {
  background(0);

 bounceoff(movingRect,fixedRect);
  

  drawSprites();
}
