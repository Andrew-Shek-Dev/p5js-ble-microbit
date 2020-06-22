let pg;
function setup(){
    let canvas = createCanvas(700,700,WEBGL);
    canvas.parent('canvas');
    pg = createGraphics(500,500);
    frameRate(1);
}

let angle = 0;
function setAngle(angleReceived){
    let lowerAngle = angleReceived - 5;
    let higherAngle = angleReceived + 5;
    if (angle >= lowerAngle && angle <= higherAngle){
    }else{
        console.log(angleReceived);
        if (angleReceived < 90){//N
            angle = PI;
        }else if (angleReceived < 180){//E
            angle = PI/4;
        }else if (angleReceived < 270){//S
            angle = 0;
        }else{//W
            angle = PI + 3*PI/4;
        }
        //angle = angleReceived;
    }
}
function draw(){
    push();
    background(205, 102, 94);
    rotateX(-45);
    translate(150,0,0);
    line(200,200,200,500);
    line(200,200,210,210);
    line(200,200,190,210);
    pg.textSize(40);
    pg.textAlign(CENTER, CENTER);
    pg.text('North',50,50);
    texture(pg);
    noStroke();
    rect(150,130,500,500);
    pop();

    push();
    rotateY(0);
    rotateY(angle);
    noStroke();
    ambientLight(255);
    ambientMaterial(255,255,0);
    arc(0, -100, 100, 100,PI,0);
    rotateZ(PI/4.0);
    arc(0, -100, 100, 100,PI,0);
    rotateZ(PI/4.0);
    arc(0, -100, 100, 100,PI,0);
    rotateZ(PI/4.0);
    arc(0, -100, 100, 100,PI,0);
    rotateZ(PI/4.0);
    arc(0, -100, 100, 100,PI,0);
    rotateZ(PI/4.0);
    arc(0, -100, 100, 100,PI,0);
    rotateZ(PI/4.0);
    arc(0, -100, 100, 100,PI,0);
    rotateZ(PI/4.0);
    arc(0, -100, 100, 100,PI,0);
    rotateZ(PI/4.0);
    ambientLight(255);
    ambientMaterial(0,128,0);
    translate(0,200,-20);
    cylinder(20, 200);
    translate(0,-200,0);
    ambientLight(255);
    ambientMaterial(139,69,19)
    sphere(110);
    ambientLight(255);
    ambientMaterial(0,0,0)
    translate(-30,-30,100);
    sphere(10);
    translate(60,0,0);
    sphere(10);
    noStroke();
    pop();
}