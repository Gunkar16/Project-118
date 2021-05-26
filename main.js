function setup(){
    Canvas = createCanvas(500,350);
    Canvas.position(517,280);
    Video = createCapture(VIDEO);
    Video.center();
    Video.hide();
}
function draw(){
    image(Video,0,0,500,350);
}
