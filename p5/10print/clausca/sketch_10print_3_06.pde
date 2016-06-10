int x = 620;
int y = 350;  
int g = 20; //dimensioni griglia

int l; 
color c;

void setup() {
  //size(800, 400);
  fullScreen();
  background(0);
  smooth();
  background(0, 20, 0); 
  // frameRate(80); 
  finestra();
}

void finestra() {
  rectMode(CENTER);
  strokeWeight(1);
  noFill(); 
  l = 200;
  c = color(random(255), random(200, 255), random(255, 255));
  smooth();
}

void draw() {
  // disegna un rettangolo con coordinate width/2, height/2 (al centro della finestra) e con larghezza uguale all'altezza..quindi un quadrato

  if (l < width/2) {
    stroke(c); 
    rect(width/2, height/2, l, l);
    l = l + 10;
  }
  //attributi delle linee
  //stroke(255);
  // rect(width/2, height/2, l-80, l-80);

  strokeCap(SQUARE);
  strokeJoin(BEVEL);
  stroke(random(255), random(255, 0), random(250, 255));

  //disegna le linee che formano il labirinto di 10print
  if (random(2) < 1) {
    line(x, y, x + g, y + g);   //disegno linea (\)
  } else {
    line(x + g, y, x, y + g); //disegno linea (/)
  }

  x = x + g;

  if (x >= 820) {   
    x = 620; 
    y = y + g;
    g=20;
  }

  if (y >= 550) {  
    y =350; 
    clear();
    finestra();  //crea il rettangolo
  }
}