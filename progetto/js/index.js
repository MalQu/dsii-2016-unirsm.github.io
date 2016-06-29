var radio;

var valoriSM;
var valoriSL;
var valoriVR;
var valoriMR;
var valoriFL;

var indice = 0;
var scala = 30;
var valoreConsentito = 50;

var text1;
var text2;
var text3;
var text4;
var text5;

function setup() {
	
		/////////bottoni
	
radio = createRadio();
  radio.option("Tutti i dati");
  radio.option("San Marino");
  radio.option("San Leo");
  radio.option("Verrucchio");
  radio.option("Marecchia");
  radio.option("Flaminia");
  textAlign(CENTER);
  fill(255, 0, 0);
  

	
////////////////////////////////////////////////////////////////////////////////////////////////////
	
	createCanvas(windowWidth,windowHeight-100);
	ellipseMode(CENTER);
	fill(255, 0, 0);
	noStroke();
	textAlign(CENTER);
	valoriSM = new Array(7,9,7,14,10,11,14,12,50,13,9,14,11,9,8,8,9,23,11,13,11,10,8,13,55,28,34,29,16,17,14);
	valoriSL = new Array(6,9,4,9,9,10,11,6,8,5,9,0,7,5,6,54,21,10,15,13,12,7,48,16,29,0,34,29,16,15,9);
	valoriVR = new Array(7,9,7,14,10,11,14,12,13,9,46,14,11,9,8,8,9,23,11,13,11,52,10,8,13,28,34,29,16,17,14);
	valoriMR = new Array(7,12,8,9,12,17,16,22,18,10,13,11,11,37,8,11,10,30,14,18,48,14,13,12,19,31,34,35,23,17,11);
	valoriFL = new Array(5,21,21,14,18,17,17,21,21,16,18,12,14,45,11,15,13,35,16,19,13,51,16,14,19,32,37,41,26,19,17);
	
	 text1 = createDiv('Valore consentito massimo NERO, valore massimo della stazione ROSSO');
	 text1.position(10, 110);
	 	
	
	 text1 = createDiv('Valore consentito massimo a norma di legge: 50 ug/m3');
	 text1.position(20, 250);
	 text1.size(350);

	 text2 = createDiv('Valore massimo stazione San Marino: 50 ug/m3');
	 text2.position(20, 320);
	 text2.size(350);
	 
	 text3 = createDiv('Valore massimo stazione San Leo: 54 ug/m3');
	 text3.position(20, 390);
	 text3.size(350);
	
	 text4 = createDiv('Valore massimo stazione Verrucchio: 48 ug/m3');
	 text4.position(20, 460);
	 text4.size(350);
	 
	 text5 = createDiv('Valore massimo stazione Marecchia: 51 ug/m3');
	 text5.position(20, 530);
	 text5.size(350);


}

function draw() {
	
  var val = radio.value();
  background(255);

/*	
		
/////////////////////////////////////////// stampa tutti i valori//////////////////////////////////////////
	
	for (var i=0; i< valoriSM.length-1;i++) {
	  var areaTemp = valoriSM[i]*scala;
	  var raggioTemp = sqrt(areaTemp/PI);
	  fill(247,97,126);
	  ellipse (100+(width-100)/valoriSM.length*i,height-40,raggioTemp,raggioTemp);	
	  fill(247,97,126);
	  text(valoriSM[i], 100+(width-100)/valoriSM.length*i,height-20);
	}
	
	for (var i=0; i< valoriSL.length-1;i++) {
	  var areaTemp = valoriSL[i]*scala;
	  var raggioTemp = sqrt(areaTemp/PI);
	  fill(247,147,30);
	  ellipse (100+(width-100)/valoriSL.length*i,height-100,raggioTemp,raggioTemp);	
	  fill(247,147,30,200);
	  text(valoriSL[i], 100+(width-100)/valoriSL.length*i,height-80);
	}
	
	for (var i=0; i< valoriVR.length-1;i++) {
	  var areaTemp = valoriVR[i]*scala;
	  var raggioTemp = sqrt(areaTemp/PI);
	  fill(0,113,188);
	  ellipse (100+(width-100)/valoriVR.length*i,height-160,raggioTemp,raggioTemp);	
	  fill(0,113,188,200);
	  text(valoriVR[i], 100+(width-100)/valoriVR.length*i,height-140);
	}
	
	for (var i=0; i< valoriMR.length-1;i++) {
	  var areaTemp = valoriMR[i]*scala;
	  var raggioTemp = sqrt(areaTemp/PI);
	  fill(204,255,153);
	  ellipse (100+(width-100)/valoriMR.length*i,height-220,raggioTemp,raggioTemp);	
	  fill(204,255,153);
	  text(valoriMR[i], 100+(width-100)/valoriMR.length*i,height-200);
	}
	
	for (var i=0; i< valoriFL.length-1;i++) {
	  var areaTemp = valoriFL[i]*scala;
	  var raggioTemp = sqrt(areaTemp/PI);
	  fill(255,207,102);
	  ellipse (100+(width-100)/valoriFL.length*i,height-280,raggioTemp,raggioTemp);	
	  fill(255,207,102);
	  text(valoriFL[i], 100+(width-100)/valoriFL.length*i,height-260);
	}
	
	*/
	
//////////////////////////////////////////////////////////SAN MARINO///////////////////////////////////////////////////////////////////////	
	 if(val=="San Marino" || val=="Tutti i dati"){

	// visualizzo il valore massimo
	var valoreMassimo = max(valoriSM);
    var areaMax = valoreMassimo*scala*scala;
    var raggioMax = sqrt(areaMax/PI);
	
	noFill();
	stroke(0);
	strokeWeight(4);
	 
    ellipse(width/3.45, height/3, raggioMax, raggioMax);
	
	
	// visualizzo il valore consentito
    var areaConsentita = valoreConsentito*scala*scala;
    var raggioConsentito = sqrt(areaConsentita/PI);
	
	noFill();
	stroke(255,0,0);
    ellipse(width/3.45, height/3, raggioConsentito, raggioConsentito);
	
	
	noStroke();
	
	
	// visualizzi un valore al secondo poi vai al prossimo infine torni al primo
	if (frameCount%60 == 0) {

	  if (indice < valoriSM.length-1) {
		  indice++
		  } else {
		  indice = 0;
		  text("riparti",30,10);
		  }
	}
	var valoreTemp = valoriSM[indice];
	
	//controlla se è sopra il valore consentito e cambia colore...
	
	if (valoreTemp >= valoreConsentito) {
	  fill(255,0,0);	
	} else {
	  fill(153,208,242);	
	}
	
	var area = valoreTemp*scala*scala;
    var raggio = sqrt(area/PI);
	
	ellipse(width/3.45, height/3, raggio, raggio);
	
	fill(0);
	text(valoriSM[indice], width/3.45, height/3);
	text("San Marino", width/3.45, height/5);
	



	  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////SAN LEO	///////////////////////////////////////////////////////////////////////////


	 if(val=="San Leo" || val=="Tutti i dati"){
	// visualizzo il valore massimo
	var valoreMassimo = max(valoriSL);
    var areaMax = valoreMassimo*scala*scala;
    var raggioMax = sqrt(areaMax/PI);
	
	noFill();
	stroke(0);
	strokeWeight(4);
    ellipse(width/2.1, height/3, raggioMax, raggioMax);
	
	
	// visualizzo il valore consentito
    var areaConsentita = valoreConsentito*scala*scala;
    var raggioConsentito = sqrt(areaConsentita/PI);
	
	noFill();
	stroke(255,0,0);
    ellipse(width/2.1, height/3, raggioConsentito, raggioConsentito);
	
	
	noStroke();
	
	
	// visualizzi un valore al secondo poi vai al prossimo infine torni al primo
	if (frameCount%60 == 0) {

	  if (indice < valoriSL.length-1) {
		  indice++
		  } else {
		  indice = 0;
		  text("riparti",30,10);
		  }
	}
	var valoreTemp = valoriSL[indice];
	
	//controlla se è sopra il valore consentito e cambia colore...
	
	if (valoreTemp >= valoreConsentito) {
	  fill(255,0,0);	
	} else {
	  fill(128,242,189);	
	}
	
	var area = valoreTemp*scala*scala;
    var raggio = sqrt(area/PI);
	
	ellipse(width/2.1, height/3, raggio, raggio);
	
	fill(0);
	text(valoriSL[indice], width/2.1, height/3);
	text("San Leo", width/2.1, height/5);
	 }
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////VERRUCCHIO//////////////////////////////////////////////////////////////////////

	 if(val=="Verrucchio" || val=="Tutti i dati"){

	// visualizzo il valore massimo
	var valoreMassimo = max(valoriVR);
    var areaMax = valoreMassimo*scala*scala;
    var raggioMax = sqrt(areaMax/PI);
	
	noFill();
	stroke(0);
	strokeWeight(4);
    ellipse(width/1.49, height/3, raggioMax, raggioMax);
	
	
	// visualizzo il valore consentito
    var areaConsentita = valoreConsentito*scala*scala;
    var raggioConsentito = sqrt(areaConsentita/PI);
	
	noFill();
	stroke(255,0,0);
    ellipse(width/1.49, height/3, raggioConsentito, raggioConsentito);
	
	
	noStroke();
	

	// visualizzi un valore al secondo poi vai al prossimo infine torni al primo
	if (frameCount%60 == 0) {

	  if (indice < valoriVR.length-1) {
		  indice++
		  } else {
		  indice = 0;
		  text("riparti",30,10);
		  }
	}
	var valoreTemp = valoriVR[indice];
	
	//controlla se è sopra il valore consentito e cambia colore...
	
	if (valoreTemp >= valoreConsentito) {
	  fill(255,0,0);	
	} else {
	  fill(242,232,92);	
	}
	
	var area = valoreTemp*scala*scala;
    var raggio = sqrt(area/PI);
	
	ellipse(width/1.49, height/3, raggio, raggio);
	
	fill(0);
	text(valoriVR[indice], width/1.49, height/3);
	text("Verrucchio", width/1.49, height/5);
	
	 }
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////MARECCHIA////////////////////////////////////////////////////////////////////////
	
	
		 if(val=="Marecchia" || val=="Tutti i dati"){
	// visualizzo il valore massimo
	var valoreMassimo = max(valoriMR);
    var areaMax = valoreMassimo*scala*scala;
    var raggioMax = sqrt(areaMax/PI);
	
	noFill();
	stroke(0);
	strokeWeight(4);
    ellipse(width/2.59, height/1.5, raggioMax, raggioMax);
	
	
	// visualizzo il valore consentito
    var areaConsentita = valoreConsentito*scala*scala;
    var raggioConsentito = sqrt(areaConsentita/PI);
	
	noFill();
	stroke(255,0,0);
    ellipse(width/2.59, height/1.5, raggioConsentito, raggioConsentito);
	
	
	noStroke();
	
	
	// visualizzi un valore al secondo poi vai al prossimo infine torni al primo
	if (frameCount%60 == 0) {

	  if (indice < valoriMR.length-1) {
		  indice++
		  } else {
		  indice = 0;
		  text("riparti",30,10);
		  }
	}
	var valoreTemp = valoriMR[indice];
	
	//controlla se è sopra il valore consentito e cambia colore...
	
	if (valoreTemp >= valoreConsentito) {
	  fill(255,0,0);	
	} else {
	  fill(209,141,242);	
	}
	
	var area = valoreTemp*scala*scala;
    var raggio = sqrt(area/PI);
	
	ellipse(width/2.59, height/1.5, raggio, raggio);
	
	fill(0);
	text(valoriMR[indice], width/2.59, height/1.5);
	fill(0);
	text("Marecchia", width/2.59, height/1.87);
	
	
		 }
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////FLAMINIA/////////////////////////////////////////////////////////////////////////////
		 if(val=="Flaminia" || val=="Tutti i dati"){
	// visualizzo il valore massimo
	var valoreMassimo = max(valoriFL);
    var areaMax = valoreMassimo*scala*scala;
    var raggioMax = sqrt(areaMax/PI);
	
	noFill();
	stroke(0);
	strokeWeight(4);
    ellipse(width/1.72, height/1.5, raggioMax, raggioMax);
	
	
	// visualizzo il valore consentito
    var areaConsentita = valoreConsentito*scala*scala;
    var raggioConsentito = sqrt(areaConsentita/PI);
	
	noFill();
	stroke(255,0,0);
    ellipse(width/1.72, height/1.5, raggioConsentito, raggioConsentito);
	
	
	noStroke();
	
	// visualizzi un valore al secondo poi vai al prossimo infine torni al primo
	if (frameCount%60 == 0) {

	  if (indice < valoriFL.length-1) {
		  indice++
		  } else {
		  indice = 0;
		  text("riparti",30,10);
		  }
	}
	var valoreTemp = valoriFL[indice];
	
	//controlla se è sopra il valore consentito e cambia colore...
	
	if (valoreTemp >= valoreConsentito) {
	  fill(255,0,0);	
	} else {
	  fill(191,54,120);	
	}
	
	var area = valoreTemp*scala*scala;
    var raggio = sqrt(area/PI);
	
	ellipse(width/1.72, height/1.5, raggio, raggio);
	
	fill(0);
	text(valoriFL[indice], width/1.72, height/1.5);
	fill(0);
	text("Flaminia", width/1.72, height/1.87);
	
	
	

}

} // draw
