var Coords = [];
class Coord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
  }
var c = document.getElementById("mainCanvas");

document.addEventListener("click", function(){
    init();
    saveCoords(event);
    if(Coords.length==2){
        MyLine();
    }
  });
  function init(){
    canvas = document.getElementById("mainCanvas");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}
  
  function saveCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    const Coordinate = new Coord(x,y);
    console.log(Coordinate);
    Coords.push(Coordinate);
    console.log(Coords);
  }

  function MyLine(){
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(Coords[0].x, Coords[0].y);
    ctx.lineTo(Coords[1].x, Coords[1].y);
    ctx.stroke();
  }


