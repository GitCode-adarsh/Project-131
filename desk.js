img = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
  img =  loadImage('desk.png');
}
function draw(){
    image(img,0,0,640,420);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("Desk",45,75);
    rect(30,60,600,350,);
}