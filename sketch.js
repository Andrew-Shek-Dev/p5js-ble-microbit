let objModel;
let p5_Microbit_Connector;
let graphics;

function preload() {
    objModel = loadModel(picturePath);
}

function setup(){
    p5_Microbit_Connector = new P5MicrobitConnector(objModel);

    let canvas = createCanvas(canvasWidth,canvasHeight,WEBGL);
    canvas.parent('canvas');
    graphics = createGraphics(pictureWidth,pictureHeight);
    frameRate(0.5);
}

function draw(){
    p5_Microbit_Connector.updateCondition(features);
    for(let feature of features){
        if (feature.action === 'DIRECTION'){
            p5_Microbit_Connector.rotate();
        }else if (feature.action === 'LIGHT'){
            //TODO: Display Intensity
        }
    }
}