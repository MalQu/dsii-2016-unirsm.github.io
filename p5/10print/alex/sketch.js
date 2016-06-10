// Alex Alessi © 2016 MIT License
// 10 print porting to P5js | San Marino, SM | 4.2016
// Educational purpose, made for DSII2016 lab @UniRSM

var w = 16;
var value = 0;
var index = 0;

function setup() {

  pixelDensity(displayDensity());
  createCanvas(displayWidth, displayHeight);
  background(255);
  noStroke();
  url = getURL();
  cursor(HAND);
}
  //Al click del mouse cambia valore

function mouseClicked() {
  if (value == 0) {
   value = 1;
  } else {
    value = 0;
  }
  return false;
}

function mouseMoved() {

if (index >= windowWidth/w) {
    var p = get(0, 16, displayWidth, displayHeight);

    background(255);
    set(0, 0, p);
    index = 0;
  }//if
  index = index + 10;

  if (value == 1) { //se clicco il mouse attivo questo sotto
     if (random(2) <1) {
       fill(135, 108, 255);

      } else {

      fill(255, 108, 140);
      ellipse(mouseX, mouseY, index, index);

      push();
      strokeWeight(3);
      stroke(255, 255, 0);
      fill(0, 0);
      var k = index + 20;
      ellipse(mouseX, mouseY, k, k);
      pop();
      }
} else {

    if (random(2) <1) {
    fill(135, 108, 255);
    } else {
      fill(255, 255, 255);
    }//if

  ellipse(mouseX, mouseY, index, index);

}
return false;
}//mouseMoved


function windowResized() {
  resizeCanvas(displayWidth, displayHeight);   //al posto di windowHeight e windowWidth
}

// se premi "s" salva come immagine
function keyTyped() {
  if (key === 's') {
    saveCanvas();
  }
  return false;
}

// se premi "canc" cancella tutto
function keyTyped() {
  if (key === ' ') {
    clear();
  }
  return false;
}
