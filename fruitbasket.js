img = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
  img =  loadImage('Fruit_basket.png');
}
function draw(){
    image(img,0,0,640,420);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("Fruit Basket",90,40);
    rect(90,30,450,350,);
}