console.clear();

//Basic setup
var canvasWidth = 250;
var canvasHeight = 150;
var lw = 50;    //lineWidth
var radius = 50;
var circle = 0;

//object definition
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


//centralisation
var centreY = new Array();
var centreX = new Array();

centreY[0] = 70;
centreY[1] = centreY[0];

centreX[0] = 70;
//centreX[1] = centreX[0] + (radius * 2) + (lw);      //for line widths 
centreX[1] = centreX[0] + (radius * 2);      //for balls

/////////////////////////
//PREFERENCES
var speed = 250;        //degrees per second
var runtime = 10000;    //1000 per second
var delay = 100;        // how long between each ball/line (in time delta)
var count = 26;          // how many balls/lines
var fading = true;      // fade balls over time


///////////////////////////
//INIT
var startTime = now();
drawFrame();



///////////////////////////
//FRAME FUNCTION
///////////////////////////
function drawFrame()
{
  var newDelta = now() - startTime;  

  var delta = newDelta

  ctx.clearRect(0,0,250,150);

  //line


  //dsadsa
  for (i = 0 ; i < count ; i ++)
  {
    ctx.beginPath();
    var x = centreX[getCircle(delta - (delay*i))];
    var y = centreY[getCircle(delta - (delay*i))];

    var angle1 = getAngle(delta - (delay*i), true);

    //draw new

    var outerPoints = getOffset(angle1, radius + lw);
    var innerPoints = getOffset(angle1, radius);

    //drawing circles
    ctx.beginPath();
    ctx.arc(x + innerPoints[0],  y + innerPoints[1], 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    if (fading)
    {
      ctx.globalAlpha = 1- ( (1/count) * i);
    }
    ctx.fill();    

    //old drawing line version
    //ctx.moveTo(x + innerPoints[0], y + innerPoints[1]);
    //ctx.lineTo(x + outerPoints[0], y + outerPoints[1]);

    //ctx.stroke();

  }



  if (delta < runtime || runtime < 0)
  {
    requestAnimationFrame(drawFrame); 
  }

}


//this is designed using two circle locations next to each other
//this function returns which one is being used at a particular delta
function getCircle(delta)
{
  ct = (delta/1000) * speed;
  var c = Math.floor(ct/360)%2;
  return c;
}

//get angle at a specific delta
function getAngle(delta, setCircle)
{ 
  c = getCircle(delta);
  //circle = Math.floor(ct/360)%2;
  if (setCircle == true)
  {
    circle = c;
  }

  if ( c == 0)
  {
    returnAngle = 0 + ((delta/1000) * speed);
  }
  else
  {
    returnAngle = 180 - ((delta/1000) * speed);   //going backwards if on the right circle
  }
  return returnAngle;
}


function getOffset(angle,rad)
{      
  angle = d2r(angle);

  var x = Math.cos(angle) * rad;
  var y = Math.sin(angle) * rad;    

  var arr = new Array();
  arr[0] = parseInt(x);
  arr[1] = parseInt(y);
  return arr;

}

function r2d(n)
{
  return n / (2 * Math.PI) * 360;
}
function d2r(n)
{
  return n / 360 * (2 * Math.PI);
}

function clog(s)
{
  console.log(s);
}

function now()
{
  return new Date().getTime();
}