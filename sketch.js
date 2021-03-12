var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   
    //create 4 different surfaces
surface1= createSprite(700,570,190,20);
surface1.shapeColor = "pink";
surface2= createSprite (510,570,200,20);
surface2.shapeColor = "red";
surface3= createSprite(335,570,200,20)
surface3.shapeColor = "green";
surface4 = createSprite(120,570,230,20);
surface4.shapeColor = "yellow";


    //create box sprite and give velocity
    box = createSprite(random(20,750),500,20,20);
    box.shapeColor = "white";
    box.velocityY = 10;
    box.velocityX = random(-7,7);

    
}

function draw() {
    music.loop();
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

if(surface3.isTouching(box)){
    box.velocityX=0;
    box.velocityY=0;
    Text("game over ;)",500,500);
}


    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box) &&  box.bounceOff(surface1)){
    box.shapeColor = "pink";
    surface1.shapeColor = "pink";
}
if(surface2.isTouching(box) &&  box.bounceOff(surface2)){
    box.shapeColor = "red";
    surface2.shapeColor = "red";
}
if(surface3.isTouching(box) &&  box.bounceOff(surface3)){
    box.shapeColor = "green";
    surface3.shapeColor = "green";
   
}
if(surface4.isTouching(box) &&  box.bounceOff(surface4)){
    box.shapeColor = "yellow";
    surface4.shapeColor = "yellow";
    
}



drawSprites();
}