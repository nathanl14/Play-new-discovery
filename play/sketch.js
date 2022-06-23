
var score=0;

function preload(){
  backgroundImg = loadImage("background.png");
  choosecountryImg = loadImage("chosecountry.png");
  fivestarImg = loadImage("five star logo.png");
  sprintsImg = loadImage("sprints.png");
  startImg = loadImage("start.png");
  usflagImg= loadImage("usflag.png")
}



function setup() {
  createCanvas(400,400);
  
  //fivestar logo
  fivestar=createSprite(210,120)
  fivestar.addImage(fivestarImg)
  fivestar.scale=0.5

  //start button
  startbutton=createSprite(210,250)
  startbutton.addImage(startImg)
  startbutton.scale=0.3

  //sprints button
  sprints=createSprite(200,200)
  sprints.addImage(sprintsImg)
  sprints.scale=0.3
sprints.visible=false

//choosecountry
choosecountry=createSprite(200,35)
choosecountry.addImage(choosecountryImg)
choosecountry.scale=0.25
choosecountry.visible=false

//us flag selection
usflag=createSprite(200,100)
usflag.addImage(usflagImg)
usflag.scale=0.4
usflag.visible=false



}

function draw() {
 background(300);
 image(backgroundImg,0,0,width,height);

 
res()
afterstart()
aftersprints()
aftercountry()


 drawSprites();
  }  
    
  
  





 function afterstart() {
  if (mousePressedOver(startbutton)){
startbutton.destroy()
fivestar.destroy()
sprints.visible=true
  }
 }



function aftersprints() {
  if (mousePressedOver(sprints)){
    sprints.destroy()
    choosecountry.visible=true
    usflag.visible=true
  }
}

function aftercountry() {
  if (mousePressedOver(usflag)){
    usflag.destroy()
    choosecountry.destroy()
  }
  }


function pinkBalloon() {
  
}
