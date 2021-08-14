img = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
  img =  loadImage('bedroom.png');
}
function draw(){
    image(img,0,0,640,420);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("Bed",120,170);
    rect(100,150,500,300,);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("Lamp",15,160);
    rect(10,150,100,130,);
}