var Coords = [];
class Coord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
  }

document.addEventListener("click", function(){
    init();
    saveCoords(event);
    if(Coords.length==2){
        MyLine();
    }
    if(Coords.length==4){
        MyCircle();
    }

  });

  function init(){
    var canvas = document.getElementById("mainCanvas");
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
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(Coords[0].x, Coords[0].y);
    ctx.lineTo(Coords[1].x, Coords[1].y);
    ctx.stroke();
  }

  function MyCircle(){
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var a = Coords[2].x - Coords[3].x;
    var b = Coords[2].y - Coords[3].y;
    var r = Math.sqrt( a*a + b*b );
    ctx.arc(Coords[2].x,Coords[2].y, r, 0, 2 * Math.PI);
    ctx.stroke();
  }


