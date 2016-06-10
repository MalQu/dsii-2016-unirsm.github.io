var cells; // griglia delle celle
var stack; // stack viene usato per salvare le celle visitate
var current;  // cella corrente
var maze; // variabile per disegnare il labirinto


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 130, 200);
  
  initializeVariables();
  createGrid();
}


function draw() {
  updateMaze();
  displayMaze();
}


function mousePressed() {
  createGrid();
}


function initializeVariables() {
  maze = createGraphics(600, 300);
  Cell.l = 22;
  
  Cell.h = Cell.l*sqrt(3)/2;
  Cell.r = Cell.h*2/3;
  Cell.theta = TWO_PI/3;
  
  Cell.cols = floor(1.8*maze.width/Cell.l)-3;
  Cell.rows = floor(maze.height/Cell.h);
}


function createGrid() {
  cells = [];
  stack = [];
  
  var x = 0, y = 0, up = false;
  
  for (var j = 0; j < Cell.rows; j += 1) {
    for (var i = j; i <= Cell.cols-j; i += 1) {
      
      if (i%2 === 0) {
        up = j%2  === 0 ? false : true;
      } else {
        up = j%2  === 1 ? false : true;
      }
      
      x = Cell.l + i*Cell.l/2;
      y = up ? Cell.r : Cell.h - Cell.r; 
      y += j*Cell.h;
      
      cells.push(new Cell(x, y, up));
    }
  }
  
  current = cells[0];
}


function updateMaze() {
  maze.background(0, 130, 200);
  
  current.visited = true;
  
  // codice per passare al neighbor
  var next = current.chooseNeighbor();
  if (next) {
    stack.push(current);  
    Cell.removeWalls(current, next);
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
  
  // codice per visualizzare le celle
  for (var i = 0, l = cells.length; i < l; i += 1) {
    cells[i].display(maze);
  }
  
  // codice per evidenziare la cella corrente
  if (stack.length > 0) {
    current.highlight(maze);
  }
}

// posizione e dimensione di tutto il disegno
function displayMaze() {
  translate(width/2, (height - maze.width)/2);
  rotate(HALF_PI);
  
  image(maze, -40, 0);
  
  scale(1, -1);
  image(maze, 90, 0);
}
