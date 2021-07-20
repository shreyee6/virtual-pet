//Create variables here
var dog
var  happyDog
var  database
var  foodS
var foodStock




function preload()
{
  //load images here
  
  happyDog = loadImage("images/dogImg1.png");
  dog = loadImage("images/dogImg.png");


  
}

function setup() {

  database = firebase.database()
  createCanvas(800,700);
  dog1 = createSprite(400,300,30,30);
  dog1.addImage(dog)
  dog1.scale = 0.4;


  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  

  
}

function draw() {  
  background(46,139,87);

if(keyWentDown(UP_ARROW)){

  writeStock(foodS);
  dog1.addImage(happyDog);

  

}

  drawSprites();
  //add styles 
  textSize(60);
 fill ("red");
  text("Food Remaining    " +foodS,200,100);
  
}


function readStock(data){
foodS = data.val()
}

function writeStock(x){
  if(x <= 0 ){
    x=0
    
  }
  else{
    x = x-1
  }
database.ref("/").update({
  Food : x
})
}



