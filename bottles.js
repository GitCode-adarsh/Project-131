img = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
  img =  loadImage('Bottles.png');
}
function draw(){
    image(img,0,0,640,420);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("Bottle",30,70);
    rect(30,60,100,350,);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("Bottle",160,40);
    rect(160,30,100,350,);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("Bottle",300,40);
    rect(300,30,300,350,);
}