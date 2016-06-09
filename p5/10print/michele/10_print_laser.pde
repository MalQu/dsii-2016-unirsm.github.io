// 10 Print laser 0.1 by Michele Leone [10 print, laser engraving]
// 2016 © Michele Leone, Daniele @Fupete and the course DSII2016 @UniRSM  
// github.com/fupete — github.com/dsii-2016-unirsm
// Educational purposes, MIT License, 2016, San Marino
// —
// Inspired by
// Daniel Shiffman (https://www.youtube.com/watch?v=HyK_Q5rrcr4)
// —
// This code allows you to create two mirror images that mimic the classic 10 print design. Left-clicking the mouse the images are regenerated, but always 
// following a different path. */
// —
// Help:
// [click left button] Regeneration of the code


Cell[] cells; // griglia delle celle
int[] stack; // stack viene usato per salvare le celle visitate
int current;  // cella corrente
PGraphics maze; // variabile per disegnare il labirinto
int stackSize;
//color bColor = color(255, 255, 255); opzione che permette di cambiare il colore dello sfondo ogni volta che si clicca col tasto sinistro del mouse
 
int l; 
float h;
float r;
float theta; 
int cols;
int rows;
 
 
 
void setup() {
  size(600, 700);
  background(0, 130, 200);
    //background(bColor); 
  initializeVariables();
  createGrid();
}
 
void draw() {
  //background(bColor);
  updateMaze();
  displayMaze();
}
 
void mousePressed() {
  createGrid();
  //bColor = color(random(255), random(255), random(255));
} 
 
void initializeVariables() {
  maze = createGraphics(500, 200);
   
  l = 22;
   
  h = l*sqrt(3)/2;
  r = h*2/3;
  theta = TWO_PI/3;
   
  cols = floor(2*maze.width/l)-3;
  rows = floor(maze.height/h);
}

void createGrid() {
  cells = new Cell[340];
  stack = new int[340];
  stackSize = 0;
   
  float x = 0, y = 0;
  boolean up = false;
   
  int index = 0;
  for (int j = 0; j < rows; j += 1) {
    for (int i = j; i <= cols-j; i += 1) {
       
      if (i%2 == 0) {
        up = j%2 == 0 ? false : true;
      } else {
        up = j%2 == 1 ? false : true;
      }
       
      x = l + i*l/2;
      y = up ? r : h - r;
      y += j*h;
       
      cells[index] = new Cell(x, y, up);
      index += 1;
    }
  }
 
  current = 0;
}
 
void updateMaze() {
  maze.beginDraw();
  maze.background(0, 130, 200);
  //maze.background(bColor);
   
  cells[current].visited = true;
   
  // codice per passare al neighbor
  int next = cells[current].chooseNeighbor();
  if (next > 0) { 
    stack[stackSize] = current;
    stackSize += 1;
    removeWalls(cells[current], cells[next]);
    current = next;
  } else if (stackSize > 0) {
    current = stack[stackSize-1];
    stackSize -= 1;
  }
   
  // codice per visualizzare le celle
  for (int i = 0, l = cells.length; i < l; i += 1) {
    cells[i].display(maze);
  }
   
  // codice per evidenziare la cella corrente
  if (stackSize > 0) {
    cells[current].highlight(maze);
  }
  maze.endDraw();
}
 
// posizione e dimensione di tutto il disegno 
void displayMaze() {
  translate(width/2, (height - maze.width)/2);
  rotate(HALF_PI);
   
  image(maze, -110, 0);
   
  scale(1, -1);
  image(maze, 80, 0);
}
 
 
class Cell {
  float x, y;  // coordinate x e y
  float angle; 
  boolean[] edges = {true, true, true}; // array booleana usata per stabilire quali bordi saranno disegnati
  boolean visited = false; // booleana usata per sapere se la cella è stata già visitata

  Cell(float x_, float y_, boolean up) {
    x = x_;
    y = y_;
    angle = up ? -HALF_PI : HALF_PI; // orientamento del triangolo
  }
   
   // formula per disegnare cerchi con diametro casuale sui bordi della cella visitata
  void highlight(PGraphics pg)  {
    float diam = random(50);
     
    pg.noStroke();
    pg.fill(255, 255, 255, 100);
   
    for (int i = 0, l = edges.length; i < l; i += 1) {
      pg.ellipse(
        x + r * cos(angle - i * theta),
        y + r * sin(angle - i * theta),
        diam, diam
      );
    }
  }
   
// formula per disegnare i bordi attivi
   void display(PGraphics pg) {
    pg.strokeWeight(visited ? 3 : 1);
    pg.stroke(visited ? color(220, 250, 255) : color(0, 130, 200));
     
    for (int i = 0, l = edges.length; i < l; i += 1) {
      if (this.edges[i]) {
        pg.line(
          x + r*cos(angle - (i+0)%l * theta),
          y + r*sin(angle - (i+0)%l * theta),
          x + r*cos(angle - (i+1)%l * theta),
          y + r*sin(angle - (i+1)%l * theta)
        );
      }
    }
  }
   
  int chooseNeighbor() {
    int index;
    float x_, y_;
    int[] list = {-1, -1, -1};
    int listSize = 0;
     
    // codice per trovare i neighbor disponibili
    for(int i = 0, l = 3; i < l; i += 1) {
      // codice per trovare la posizione dei neighbor
      x_ = x + r * cos(angle - theta * (i + 0.5));
      y_ = y + r * sin(angle - theta * (i + 0.5));
       
      // usare la posizione per trovare l'index dei neighbor
      index = findIndex(round(x_), round(y_));
       
      // se il neighbor non è stato ancora visitato, viene aggiunto alla lista dei neighbor disponibili
      if (index > 0 && !cells[index].visited) {
        list[listSize]  = index;
        listSize += 1;
      }
    }
 
    // se ci sono neighbor disponibili, ne viene scelto uno
    if (listSize > 0) {
      return list[floor(random(listSize))];
    } else {
      return -1;
    }
  }
   
}
 
void removeWalls(Cell c, Cell n) {
  float angle = atan2(n.y - c.y, n.x - c.x);
  angle = (angle + PI)%PI;
   
  int idx = floor(2 * angle / theta);
   
  c.edges[idx] = false;
  n.edges[idx] = false;
};
 
int findIndex(float x, float y) {
  // codice per individuare la posizione sulla griglia
  int i = floor(2*x/l)-2;
  int j = floor(y/h);
   
  // codice per trovare l'index sull'array delle celle se si trova su una posizione valida della griglia
  int index = i;
  if (i >= j && i <= cols-j && j >= 0 && j < rows) {
    for (int k = 0; k < j; k += 1) {
      index += cols - 2*k;
    }  
    return index;
  } else {
    return -1;
  }
}
