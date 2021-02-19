var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1200,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = "yellow";
  car.velocityX = speed;

  wall = createSprite(1100,200,60,height/2);
  wall.shapeColor = "red";

}

function draw() {
  background(0);  

  console.log(Math.round(deformation));

  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22500;

    if(deformation>180){
      car.shapeColor = "red";
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }

    if(deformation<100){
      car.shapeColor = "green";
    }

    }

  drawSprites();
}