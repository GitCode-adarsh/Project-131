img = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
  img =  loadImage('Tv and Ac.png');
}
function draw(){
    image(img,0,0,640,420);

    
    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("Television",170,140);
    rect(170,130,250,80,);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("Air conditioner",170,60);
    rect(170,50,250,50,);
}