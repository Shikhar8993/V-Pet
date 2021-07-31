//Create variables here
var Dog,DogImg,DogImg1;
var database;
var foodS;

function preload()
{
	//load images here
   DogImg=loadImage("dogImg.png");
   DogImg1=loadImage("dogImg1.png");

}

function setup() {
	createCanvas(800, 700);
  Dog=createSprite(400,400,50,50);
  Dog.addImage(DogImg);
  Dog.scale=(0.4);

  database=firebase.database();
  foodStock=database.ref('foodCount')
  foodStock.on("value",readStock);
}


function draw() { 
  background("cyan") ;
  
  textSize(18);
  text("Food Remaining:"+ foodS,300,200);

  text("Press Up Arrow key to Feed the Dog",230,50);

  if(keyWentDown("UP_ARROW")){
  
    writeStock(foodS)
    Dog.addImage(DogImg1)

  }
  
  drawSprites();
  //add styles here


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }

  database.ref('/').update({

    foodCount:x

  })
}


