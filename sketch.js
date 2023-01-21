/*
  Forest of people and their minds
  24-11-2022
  kruti shah
*/


function setup(){
  createCanvas(1280,320);
  background(255);
  stroke(200);
  fill(200);
}

function draw(){
  drawHuman();

  if(frameCount % 10 == 0)drawFog(); // only draw the fog evey 16 frames
}

// fog is a slightly opaque rectangle over the entire window
function drawFog(){
  push();
  fill(255, 255,255,50);
  noStroke();
  rect(0,0,width,height);
  pop();
}

function drawHuman(){
      
    let bLen = random(50,100);
    let bAng = -PI*0.5;

    push();
    translate(random(width), height);
    scale(2);
    branch(bLen, bAng); 
    pop();
    
  
}


function branch(len, theta){
  push();
  rotate(theta); 
  let R=map(6,0,100,20,200,true);
  fill(R,100,200);
  strokeWeight(random(0,2));
  ellipse(0,0,len,len);
  bezier(100, len, 10,len, 90, len, 10, len);
  
  translate(len*0.6,0); 

  if(len >5.0){ // stop condition - very important!
    let newAng = random(PI*0.25); 
    let newLen = len/2 * random(0.1,0.5); 
    branch(len * random(0.1,0.3), - newAng); 
    branch(len * random(0.1,0.3), newAng);   
    
  }else{
   line(0,0,4,4); 
  }
  pop();
}

function keyTyped() {
  if (key === 's') {
    photo.save('photo', 'png');
  }
}