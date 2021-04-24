const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var bg,hbg,bg2;
var level1,level2;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var ground,ground2;
var pig1,pig2;
var log1,log2,log3,log4;
var bird,bird2;
var sling;
var score=0;
var gameState=0;
var start,start1,startButton;
var rules,rule,rule2;
var rbk,lbk;
var gbk,g2bk;

function preload(){
bg=loadImage("images/level 1 bg.jpg")
hbg=loadImage("images/bg.png")

bg2=loadImage("images/level 2bg.png")
}
function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  rbk=createButton("BACK")
  rbk.position(10,360)
  rbk.style("color","white")
rbk.style("background","red")
rbk.style("font-size","20px")
rbk.mousePressed(()=>{
  gameState=0;
  rules.show()
  startButton.show()
})
lbk=createButton("BACK")
lbk.position(10,360)
lbk.style("color","white")
lbk.style("background","red")
lbk.style("font-size","20px")
lbk.mousePressed(()=>{
gameState=0;
rules.show()
startButton.show()
})
gbk=createButton("BACK")
gbk.position(10,10)
gbk.style("color","white")
gbk.style("background","red")
gbk.style("font-size","20px")
gbk.mousePressed(()=>{
gameState=1;
})
g2bk=createButton("BACK")
g2bk.position(10,10)
g2bk.style("color","white")
g2bk.style("background","red")
g2bk.style("font-size","20px")
g2bk.mousePressed(()=>{
gameState=1;
})
 // if(gameState===2){
box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70)
box5=new Box(810,160,70,70)
box6=new Box(580,320,70,70)
box7=new Box(580,300,70,70)
box8=new Box(1050,320,70,70)
box9=new Box(1050,300,70,70)
  

ground=new Ground(600,370,1200,52)

pig1=new Pig(810,350)
pig2=new Pig(810,220)
log1=new Log(810,260,300,PI/2)
log2=new Log(810,180,300,PI/2)
log3=new Log(760,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)
bird=new Bird(110,100)
bird2=new Bird2(80,350)
sling=new SlingShot(bird.body,{x:200,y:180})
score=0;
  //}
  //if(gameState===3){

  //}


rules=createButton("HOW TO PLAY")
rules.style("color","white")
rules.style("background","red")
rules.style("font-size","20px")
rules.position(10,360)
rules.mousePressed(()=>{
  gameState=-1
})


level1=createButton("LEVEL1")
level1.position(200,100)
level1.style("color","white")
level1.style("background","red")
level1.style("font-size","20px")
level1.mousePressed(()=>{
  gameState=2
})

level2=createButton("LEVEL2")
level2.position(400,100)
level2.style("color","white")
level2.style("background","red")
level2.style("font-size","20px")
level2.mousePressed(()=>{
  gameState=3
})
  rule=createElement("h1")
  rule.html("1. To attach the birds to the slingshot: Press 1 to attach red bird, press 2 to attach black ")
  rule.position(10,0)
  rule.style("color","white")

  rule2=createElement("h1")
  rule2.html("bird.")
  rule2.position(15,40)
  rule2.style("color","white")

 
 // start1=createSprite(1100,70,50,50)
  //start1.addImage(start)
  //start1.scale=0.5
 startButton=createButton("PLAY")
 startButton.position(1120,40)
 startButton.style("color","white")
startButton.style("background","red")
startButton.style("font-size","20px")
startButton.mousePressed(()=>{
  gameState=1
  startButton.hide()
  Matter.Body.setPosition(bird.body,{x:200,y:190})
    
})

}



function draw() {
  
  background(bg);
  Engine.update(engine);
  //if(mousePressedOver(start1)){
	//gameState=1
	//start1.visible=false
//}
  if(gameState===-1){
    clear()
    background("#654321")
    rules.hide()
    startButton.hide()
    level2.hide()
    rule.show()
    rule2.show()
    rbk.show()
    g2bk.hide()
    gbk.hide()
  }
  if(gameState===0){
    rule.hide()
    gbk.hide()
    level2.hide()
    rule2.hide()
    rbk.hide()
    lbk.hide()
    g2bk.hide()
    clear()
    background(hbg)
    level1.hide()
  }
  if(gameState===1){
    gbk.hide()
    g2bk.hide()

clear()
background(0,50,0)
textSize(50)
fill(255)
text("LEVELS",530,50)
level1.show()
level2.show()
rules.hide()
lbk.show()
rbk.hide()
  }
  if(gameState===2){
    level1.hide()
    gbk.show()
    g2bk.hide()
    rbk.hide()
    lbk.hide()
   level2.hide()
noStroke()
fill(255)
textSize(35)
 text("Score: "+score,width-300,50)
 
 Matter.Body.setPosition(box6.body,{x:10000,y:0})
 Matter.Body.setPosition(box7.body,{x:10000,y:0})
 Matter.Body.setPosition(box8.body,{x:10000,y:0})
 Matter.Body.setPosition(box9.body,{x:10000,y:0})



box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
pig1.display();
pig1.score()
pig2.display();
pig2.score()
log1.display();
log2.display();
log3.display();
log4.display();
bird.display();
 bird2.display()
 sling.display()
// text("gamestate "+gameState,300,50)

  }

  if(gameState===3){
	  rbk.hide()
    gbk.hide()
    g2bk.show()
    lbk.hide()
    level1.hide()
    level2.hide()
    rule.hide()
    rule2.hide()
    rules.hide()
    startButton.hide()
	background(bg2)
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	pig1.display();
	pig1.score()
	pig2.display();
	pig2.score()
	log1.display();
	log2.display();
	log3.display();
	log4.display();
	bird.display();
	 bird2.display()
	 sling.display()
	 
	 noStroke()
fill(255)
textSize(35)
 text("Score: "+score,width-300,50)
 
	 ground.display()
  }
 //	 drawSprites()
} 
function mouseDragged(){
 if(keyCode===50){
  Matter.Body.setPosition(bird2.body,{x:mouseX,y:mouseY})
 }else if(keyCode===49){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
 }
 if(keyCode===98){
  Matter.Body.setPosition(bird2.body,{x:mouseX,y:mouseY})
 }else if(keyCode===97){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
 }
}    
function mouseReleased(){
  sling.fly()
 
}  
function keyPressed(){
  if(keyCode===50  ){
    bird.trajectory=[];
    bird2.trajectory=[];

    Matter.Body.setPosition(bird2.body,{x:130,y:100})
    sling.attach(bird2.body)
    
  }
  if(keyCode=== 98 ){
    bird.trajectory=[];
    bird2.trajectory=[];

    Matter.Body.setPosition(bird2.body,{x:130,y:100})
    sling.attach(bird2.body)
    
  }
  if(keyCode===49){
    bird.trajectory=[];
    bird2.trajectory=[];

    Matter.Body.setPosition(bird.body,{x:130,y:100})
    sling.attach(bird.body)
    
  }
  if(keyCode===97){
    bird.trajectory=[];
    bird2.trajectory=[];

    Matter.Body.setPosition(bird.body,{x:130,y:100})
    sling.attach(bird.body)
    
  }
}

