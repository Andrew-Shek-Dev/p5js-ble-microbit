
let angle = 0;
let previousAngle = 0;
let intensity = 0;
let check = 0;
let totalFeatures = 0;

export default class P5MicrobitConnector{
    setAngle(angleReceived) {
        if (angleReceived < 90) {//N
            angle = PI;
        } else if (angleReceived < 180) {//E
            angle = PI / 4;
        } else if (angleReceived < 270) {//S
            angle = 0;
        } else {//W
            angle = PI + 3 * PI / 4;
        }
    }

    setLightIntensity(intensityReceived){
        intensity = intensityReceived;
    }

    updateCondition(features) {
        totalFeatures = features.length;
        for (let feature of features) {
            if (feature.action === 'DIRECTION') {
                if (feature.runStandalone) {
                    this.rotate();
                    totalFeatures = 0;
                } else {
                    check++;
                }
            } else if (feature.action === 'LIGHT') {
                if (feature.runStandalone) {
                    //TODO: Display Number
                    totalFeatures = 0;
                } else {
                    if (intensity > feature.threshold) {
                        check++;
                    }
                }
            }
        }
    }

    directionRefer(){
        // line(200,200,200,500);
        // line(200,200,210,210);
        // line(200,200,190,210); 
        // graphics.textSize(40);
        // graphics.textAlign(CENTER, CENTER);
        // graphics.text('North',50,50);
        // texture(graphics);
        // noStroke();
        // rect(150,130,500,500);
        line(200,500,200,200);
        line(200,500,210,490);
        line(200,500,190,490);
        graphics.textSize(50);
        graphics.textAlign(CENTER, CENTER);
        graphics.text('North',60,60);
        texture(graphics);
        noStroke();
        rect(150,500,600,600);
    }

    // flower(){
    //     noStroke();
    //     ambientLight(255);
    //     ambientMaterial(255,255,0);
    //     arc(0, -100, 100, 100,PI,0);
    //     rotateZ(PI/4.0);
    //     arc(0, -100, 100, 100,PI,0);
    //     rotateZ(PI/4.0);
    //     arc(0, -100, 100, 100,PI,0);
    //     rotateZ(PI/4.0);
    //     arc(0, -100, 100, 100,PI,0);
    //     rotateZ(PI/4.0);
    //     arc(0, -100, 100, 100,PI,0);
    //     rotateZ(PI/4.0);
    //     arc(0, -100, 100, 100,PI,0);
    //     rotateZ(PI/4.0);
    //     arc(0, -100, 100, 100,PI,0);
    //     rotateZ(PI/4.0);
    //     arc(0, -100, 100, 100,PI,0);
    //     rotateZ(PI/4.0);
    //     ambientLight(255);
    //     ambientMaterial(0,128,0);
    //     translate(0,200,-20);
    //     cylinder(20, 200);
    //     translate(0,-200,0);
    //     ambientLight(255);
    //     ambientMaterial(139,69,19)
    //     sphere(110);
    //     ambientLight(255);
    //     ambientMaterial(0,0,0)
    //     translate(-30,-30,100);
    //     sphere(10);
    //     translate(60,0,0);
    //     sphere(10);
    //     noStroke();
    // }

    rotate(){
        push();
        background(205, 102, 94);
        rotateX(-1*PI/4);
        translate(150,0,0);
        this.directionRefer();
        pop();

        push();
        // rotateY(0);
        // if (intensity > 200){
        //     rotateY(angle);
        //     previousAngle = angle;
        // }else{
        //     rotateY(previousAngle)
        // }
        // this.flower();
        rotateY(-1*PI);
        //if (intensity > 200) {
        if (check === totalFeatures){
            rotateY(angle);
            previousAngle = angle;
        } else {
            rotateY(previousAngle)
        }

        let locX = mouseX - height / 2;
        let locY = mouseY - width / 2;
     
        ambientLight(60, 60, 60);
        pointLight(255, 255, 255, 0, 0, 100);
        normalMaterial();
        fill(255, 255, 0);
        rotateZ(PI);
        scale(150);
        model(objModel);
        pop();
        check = 0;
        totalFeatures = 0;
    }
}