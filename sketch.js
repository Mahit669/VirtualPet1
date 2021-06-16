var dogImg , happyDogImg ,dog , database , foodS , foodstock ;

function preload()
{
	happyDog=loadImage("images/dogImg1.png");
  dog=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();
  
  dog=createSprite(550,250,10,10);
  dog.addImage(dog);
  dog.scale=0.15;

  foodStock=databse.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog,200,200);
  }

  drawSprites();
  //add styles here

  textSize(20);
  fill("white");
  text("Note: Press UP_ARROW to feed the dog");

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
  
}
