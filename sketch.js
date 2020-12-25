var man,image1;
function preload() {


image1 = loadImage("images/minimilitiaman.png");

}
function setup(){
    man = createSprite(200,200,50,50);
    //image(image1,200,200);

}
function draw(){
    createCanvas(1200,800);
   
    drawSprites();
}