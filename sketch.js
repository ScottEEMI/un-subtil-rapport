let hi = 1 + 1/3;
let pos = 0;
let posY;
let posX;
let sizeX;
let sizeY;

let x;
let y;


function windowResize(){
  x = windowWidth;
  y = x / 1.5;
  resizeCanvas(x,y)
  let canvasPositionY = (windowHeight/2) - (y/2);
  canvas.position(0,canvasPositionY);
}

function setup() {
  x = windowWidth;
  y = x / 1.5;
  let canvas = createCanvas(x,y);
  let canvasPositionY = (windowHeight/2) - (y/2);
  // print("canvasPositionY = " + canvasPositionY);
  canvas.position(0,canvasPositionY);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  if (x < 900) {
    print(x);
    canvas.style('display', 'none');
  }
}

function draw() {
  background(300);
  // COULEUR DORCEL
  stroke(240, 162, 195);
  // stroke(0,0,0);
  strokeWeight(4);
//   rectangle du centre
  fill(240, 162, 195);
  rect(x/4, y/4, x/2, y/2);
  // rect(x/2.75, y/2.75, x/4, y/4);
  noFill();
  rect(x/6, y/6, x/1.5, y/1.5);
//   rectangle de contour
  rect(1, 1, x-1, y-1);
  // LIGNES
//   ligne haut/gauche
  line(0, 0, x/4, y/4);
//   ligne haut/droite
  line(x, 0, x/hi, y/4);
//   ligne bas/droite
  line(x, y, x/hi, y/hi);
//   ligne bas/gauche
  line(0, y, x/4, y/hi);
  strokeWeight(3);
  //   ligne // droite
    line(x/2, 0, x/2, y);
    line(x, y/2, 0, y/2);
    line(x, y/4, 0, y*3/4);
    line(x, y*3/4, 0, y/4);
    line(x/4, y, x*3/4, 0);
    line(x*3/4, y, x/4, 0);

  strokeWeight(3);

  noFill();
  rect(x/4 - posX,y/4 - posY, x/2 + sizeX, y/2 + sizeY);
  if (sizeX > 750){
    pos = 0;
    posX = 0;
    posY = 0;
    sizeX = 0;
    sizeY = 0;
    rect(x/4 - posX,y/4 - posY, x/2 + sizeX, y/2 + sizeY);
  }
  if (sizeX < -1){
    pos = 200;
    posX = 300;
    posY = 200;
    sizeX = 600;
    sizeY = 400;
    rect(x/4 - posX,y/4 - posY, x/2 + sizeX, y/2 + sizeY);
  }
}

function mouseWheel(event) {
  // print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta/5;
  posX = pos * 1.5;
  posY = pos;
  sizeX = posX * 2;
  sizeY = posY * 2;
  //uncomment to block page scrolling
  // return false;
}
