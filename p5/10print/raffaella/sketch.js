var DimQuadrato = 80; //quadrati
var nQuadratix ;
var nQuadratiy ;





function setup() {
	
createCanvas(windowWidth, windowHeight);
background(221,0,87);
strokeCap(SQUARE);// estremità linee

nQuadratix = windowWidth / DimQuadrato; // numero di quadrati sull'asse orizzontale
nQuadratiy = windowHeight / DimQuadrato;//numero di quadrati sull'asse verticale
   
}

function draw() {
	
//decido random la x e la y del quadrato da disegnare 
 var a = int(random(nQuadratix));
  var b = int(random(nQuadratiy));

//disegno il quadrato
 fill(221,0,87);
  noStroke();
  rect(a*DimQuadrato, b*DimQuadrato, DimQuadrato, DimQuadrato);
 
//disegno le linee 
 strokeWeight(2);
  stroke(0);

if (int(random(2)) < 1) {
line(a*DimQuadrato, b*DimQuadrato, (a+1)*DimQuadrato, (b+1)*DimQuadrato);
}else{
line((a+1)*DimQuadrato, b*DimQuadrato, a*DimQuadrato, (b+1)*DimQuadrato);
}


}
    
