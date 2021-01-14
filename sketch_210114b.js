// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(255, 142, 131);
  c2 = color(64, 114, 129);
  c3 = color(141,220,255);
}


function draw() {
  setGradientPattern(0,0, width*(1/3), height*(1/3), c1,c2,c3);
  push();
  translate( width*(1/3) * 2, 0);
  rotate(HALF_PI);
  setGradientPattern(0,0, width*(1/3), height*(1/3), c3,c2,c1);
  pop();
  push();
  translate( width*(1/3) *3, height*(1/3));
  rotate(PI);
  setGradientPattern(0,0, width*(1/3), height*(1/3), c1,c2,c3);
  pop();
  
  translate(0, height*(1/3));
  setGradientPattern(0,0, width*(1/3), height*(1/3), c3,c2,c1);
  push();
  translate( width*(1/3) * 2, 0);
  rotate(HALF_PI);
  setGradientPattern(0,0, width*(1/3), height*(1/3), c1,c2,c3);
  pop();
  push();
  translate( width*(1/3) *3, height*(1/3));
  rotate(PI);
  setGradientPattern(0,0, width*(1/3), height*(1/3), c3,c2,c1);
  pop();
  
  translate(0, height*(1/3));
  setGradientPattern(0,0, width*(1/3), height*(1/3), c3,c2,c1);
  push();
  translate( width*(1/3) * 2, 0);
  rotate(HALF_PI);
  setGradientPattern(0,0, width*(1/3), height*(1/3), c3,c2,c1);
  pop();
  push();
  translate( width*(1/3) *3, height*(1/3));
  rotate(PI);
  setGradientPattern(0,0, width*(1/3), height*(1/3), c1,c2,c3);
  pop();
  
  save("20210114.png");
  noLoop();
  
}


function setGradientPattern(x, y, w, h, c1, c2, c3){
  noFill();
  // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(c);
      line(x, i, x + w, i);
      
       if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
    }
    
    push();
    translate( w * 0.9, h*0.5);
    scale(0.8);
    rotate(HALF_PI);
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h)/2, 0, 1);
      let c = lerpColor(c3, c2, inter);
      
      let inter02 = map(i, (y + h)/2 ,  y + h , 0, 1);
      let p = lerpColor(c2, c1, inter02);
      
      if ( i <= ((y + h)/2)){
        stroke(c);
        line( (x * h) - (i), i, (x * h) + i, i);
      }else{
        stroke(p);
        line( (x - h) + i , i, (x + h) - i , i);
      }
    }
    pop();
  
}
