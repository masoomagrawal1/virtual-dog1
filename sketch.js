//Create variables here
var  dog, happyDog, database, foodS, foodStock;
var image1,image2;
function preload()
{
  //load images here
  image1=loadImage("images/dogImg.png");
  image2=loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,200);
  dog.scale=0.3
  dog.addImage(image1);
  database=firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46, 139, 87);
  
 
  if(keyWentDown("space")){
    writeStock(foodS);
    dog.addImage(image2);

  }
  if(keyWentUp("space")){
    dog.addImage(image1);
  }
  drawSprites();
  //add styles here
  textSize(40);
  fill("blue");
  strokeWeight(3);
  text("foodStock"+foodS,120,80)
 

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  //  dog.addImage(image1)
  }
 else{
      x=x-1;
    }
  
  database.ref("/").update({food:x});
}


