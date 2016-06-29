var img, sample;
var res, n, d;
 
// list of resolutions
var rlist = (25, 50, 100, 10, 20);
 
   
function setup() {
   
  createCanvas(695, 695);
  img = loadImage("img.jpg");
  nextRes();
 
}
 
 
function nextRes() {
   
  // resample the image
  res = (res + 1) % rlist.length;
  n = rlist[res];
  sample = img.get();
  sample.resize(n, n);
  d = width/n;
   
}
 
 
function draw() {
   
  var m = constrain(130 * mouseX / width, 1, 129);
 
  loadPixels();
  
  // iterate over all blocks
  for(var x = 0; x < n; x++) {
    for(var y = 0; y < n; y++) {
       
      // sample pixel brightness
      var val = 256 - (sample.pixels[y*n+x] & 255);
       
      // iterate over all pixels of a block
      for(var dx = 0; dx < d; dx++) {
        for(var dy = 0; dy < d; dy++) {
           
          // get diagonal coordinate
          var z = val % (2*m) < m ? (dx+dy+1) * 255 / d : (dx+d-dy) * 255 / d;
                    
          // black and white dithering
          pixels[ (y*d + dy) * width + (x*d + dx) ] = val > 2 * abs(z - 255) + 2 ? 0 : 255;
           
        }
      }
       
    }
  }
     
  updatePixels();
   
}
 
 
function keyPressed() {
  nextRes();
}