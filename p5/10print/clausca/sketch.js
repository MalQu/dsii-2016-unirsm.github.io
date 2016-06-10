//Finestra su 10 print_Prospettiva centrale
//Clausca variazione 10 print in p5.js// 6.05.2016

//Disegna il labirinto di 10 print all'interno di un quadrato in espansione. 
//Quando le linee (\) (/) del labirinto giungono in fondo al quadrato, il labirinto ricomincia da capo e il quadrato si espande nuovamente.

//Da fare: dimensioni del quadrato random: il labirinto inscritto si adatta alle dimensioni random del quadrato...

var x= 620; //coordinate per labirinto 10print
var y= 280;
var g= 20; 

var t;  //trasparenza
var l;  //larghezza iniziale del quadrato
var color= c; //colore 

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(100); 
  finestra();
 }

function finestra(){
  background(0);
  rectMode(CENTER);
  strokeWeight(1);
  noFill(); 
  l = 200;//larghezza del quadrato
  t=80; //trasparenza del quadrato
  c = color(random(255), random(200, 255), random(255, 255));
  smooth();
 
  }
  
function draw() {
	
// disegna un rettangolo con coordinate width/2, height/2 (al centro della       finestra) e con larghezza uguale all'altezza..quindi un quadrato
	if (l < width/2) {  
    stroke(c, t); 
    rect(width/2, height/2, l, l);
    t =  t + 3; // aumentiamo il valore della trasparenza
    l = l+10;  //aumentiamo di 10 il valore della larghezza
  } 
  
 //attributi delle linee
 var strokeW = g/10;  
 strokeWeight(strokeW);
 strokeCap(SQUARE);
 strokeJoin(BEVEL);
 stroke(random(0, 255),(0, 255), (0, 255));
	 

 //disegna le linee che formano il labirinto di 10print
  if (random(2) < 1) {
	 line(x, y, x + g, y + g);   //disegno linea (\)
  } else {
    line(x + g, y, x, y + g); //disegno linea (/)
  }
  
  x = x + g;

  if (x >= width-620) {   
  //se supera la larghezza della pagina, va a capo e ricomincia_va alla riga seguente
    x = 620; 
    y = y+g;
	g=20;
  }
  
 if (y >= height-280) {  
  //se supera l'altezza della pagina, va a capo, ricomincia e richiama il setup
    y = 280; 
    clear(); 
    finestra();//crea il rettangolo
  }
 
}


function keyTyped() { 
// se premo 'n' fermo il loop e salvo l'immagine, se premo 'l' riprendo il loop

 if (key === 'n') {
	noLoop();
    saveCanvas();
  }
 else if (key === 'l') {
  Loop();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
