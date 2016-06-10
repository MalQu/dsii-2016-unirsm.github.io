// Caterina Lipari © 2016 MIT License
// 10 print porting to P5js | San Marino, SM | 4.2016
// Educational purpose, made for DSII2016 lab @UniRSM
// Codice a barre


//inserimento input audio
new p5.AudioIn()

var x = 0;  // store current x position on the grid
var y = 0;  // store current y position on the grid
var g = 10; // grid size
var colore = 255; // current grid color
var ciclo=1;
var input;
var analyzer;

function setup() {
   pixelDensity(displayDensity());
   createCanvas(windowWidth, windowHeight);
   url = getURL();
   //strokeJoin(ROUND);
   cursor(HAND);
   ellipseMode(CENTER);
   //prendi i valori input del microfono
   mic = new p5.AudioIn()
  mic.start();
 }

function draw() {
  //background(colore-255); solo una linea che avanza
    strokeWeight(g/random(5));
    stroke(colore);
    
   //variabili suoni input
    var vol = mic.getLevel();
    var h = map(vol, 0, 1, height, 0);
    var r = random(4,10);

  // lancio la monetina e disegno 
  if (testa()) {
 
if (ciclo==1){
  //variante linee
      line(x*g,y,x*g,height); //linee dritte
 //variante linee
}
if (ciclo==2){
   //variante cerchio
   var h = map(vol, 0, 1, height, 0);
      //ellipse(width/2, height/2, h, h);
      ellipse(x*g,height/2,h/r,h/r);
      //ellipse(x*g,height/2,x+g,x+g); //cerchio al centro 
 //variante cerchio
}
if (ciclo==3){

    //variante cerchio Random
    var h = map(vol, 0, 1, height, 0);
      ellipse(x*g,height-random(height),h/r,h/r);
     // ellipse(x*g,height-random(height),x+g,x+g); //cerchio al centro 
 //variante cerchio Random
}
      // passo alla casella a lato
  x++;

  }  // lancio la monetina e disegno 


  // se sono in fondo alla riga vado a capo, cambio colore e cambia g
  if (x*g >= width) {
    ciclo++;
    x=0;
    colore = random(255); 
    g = 5+random(20);
    background(colore-255);
  }
  if (ciclo>= 4) {
    ciclo=1;
  } 
  } //chiudi draw

// riparti se premi il mouse
function mousePressed() {
  ciclo++;
  x=0;
  y=0;
  colore = random(255);
  g = 10+random(20);
}

// lancio della monetina
function testa() {
  if (random(2) <= 1) {
    return(true); // testa
  } else {
    return(false); // croce
  }
}


// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// se premi "s" salva come immagine
function keyTyped() {
  if (key === 's') {
    saveCanvas();
  }
  return false;
}
