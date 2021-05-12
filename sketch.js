var fixrect,movrect;


function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 80, 50);
  fixrect.shapeColor="green";
  movrect=createSprite(200,400,50,80);
  movrect.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  movrect.x=World.mouseX;
  movrect.y=World.mouseY; 
  //console.log(movrect.x-fixrect.x);
  if(movrect.x-fixrect.x<=movrect.width/2+fixrect.width/2){
    movrect.shapeColor="red";
    fixrect.shapeColor="red";
  }
  else{
    movrect.shapeColor="green";
    fixrect.shapeColor="green";
  }
 
  drawSprites();
}