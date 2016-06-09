function Cell(x, y, up) {
  this.x = x; // coordinate x
  this.y = y; // coordinate y
  this.angle = up ? -HALF_PI : HALF_PI; // orientamento del triangolo
  this.edges = [true, true, true];  // array booleana usata per stabilire quali bordi saranno disegnati
  this.visited = false; // booleana usata per sapere se la cella è stata già visitata
}

// formula per disegnare cerchi con diametro casuale sui bordi della cella visitata

Cell.prototype.highlight = function(pg)  {
  var diam = random(50);
  
  pg.noStroke();
  pg.fill(255, 255, 255, 100);

  for (var i = 0, l = this.edges.length; i < l; i += 1) {
    pg.ellipse(
      this.x + Cell.r * cos(this.angle - i * Cell.theta), 
      this.y + Cell.r * sin(this.angle - i * Cell.theta),
      diam, diam
    );
  }
};

// formula per disegnare i bordi attivi

Cell.prototype.display = function(pg) {
  pg.strokeWeight(this.visited ? 3 : 1);
  pg.stroke(this.visited ? color(255, 255, 255) : color(0, 130, 200));
  
  for (var i = 0, l = this.edges.length; i < l; i += 1) {
    if (this.edges[i]) {
      pg.line(
        this.x + Cell.r*cos(this.angle - (i+0)%l * Cell.theta),
        this.y + Cell.r*sin(this.angle - (i+0)%l * Cell.theta),
        this.x + Cell.r*cos(this.angle - (i+1)%l * Cell.theta),
        this.y + Cell.r*sin(this.angle - (i+1)%l * Cell.theta)
      );
    }
  }
};

Cell.prototype.chooseNeighbor = function () {
  var index;
  var x, y;
  var list = [];
  
  // codice per trovare i neighbor disponibili
  for(var i = 0, l = 3; i < l; i += 1) {
    // codice per trovare la posizione dei neighbor
    x = this.x + Cell.r * cos(this.angle - Cell.theta * (i + 0.5));
    y = this.y + Cell.r * sin(this.angle - Cell.theta * (i + 0.5));
    
    // usare la posizione per trovare l'index dei neighbor
    index = Cell.findIndex(round(x), round(y));
    
    // se il neighbor non è stato ancora visitato, viene aggiunto alla lista dei neighbor disponibili
    if (index && !cells[index].visited) {
      list.push(cells[index]);
    }
  }
  
  // se ci sono neighbor disponibili, ne viene scelto uno
  if (list.length > 0) {
    return list[floor(random(list.length))];
  }
};  

Cell.findIndex = function (x, y) {
  // codice per individuare la posizione sulla griglia
  var i = floor(2*x/Cell.l)-2;
  var j = floor(y/Cell.h);
  
  // codice per trovare l'index sull'array delle celle se si trova su una posizione valida della griglia
  var index = i;
  if (i >= j && i <= Cell.cols-j && j >= 0 && j < Cell.rows) {
    for (var k = 0; k < j; k += 1) {
      index += Cell.cols - 2*k;
    }
    
    return index;
  }
};

Cell.removeWalls = function (c, n) {
  var angle = atan2(n.y - c.y, n.x - c.x);
  angle = (angle + PI)%PI;
  
  var idx = floor(2 * angle / Cell.theta);
  
  c.edges[idx] = false;
  n.edges[idx] = false;
};
