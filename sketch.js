var bullet, wall;
var speed, weight,thickness,bulletRightEdge,wallLeftEdge;


function setup() {
  createCanvas(1600,400);
  //create sprite for car on left of canvas , give color white and velocit in negetive
   bullet=createSprite(50,200,50,50);
   bullet.shapeColor="white";
   
   //bullet.velocityX=-5;
  //assign random value to speed and weight (refer pproject document for value of random)
   speed=random(223,321);
   weight=random(30,52);
   thickness=random(22,83)
  //Assign the velocityX property of the car sprite to the speed variable.
   bullet.velocityX=speed;

  //create sprite for wall on right of the canvas, give color grey
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";
}

function draw() {
  background("yellow");  

   
  //write if condition for collision detection

  if(hasCollide(wall, bullet) )
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor="red";
    }
    if(damage<10)
    {
    wall.shapeColor="green";
    }
  }


  drawSprites();
}

function hasCollide(lwall,lbullet)
{
  //var bulletRightEdge=
  //wallLeftEdge=lwall.x -lbullet.x
  if(lwall.x -lbullet.x <=(wall.width+bullet.width)/2)
  {
      return true
   }
  else{
    return false
  }

}