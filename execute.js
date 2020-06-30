function directionReceived(angle) {
    p5_Microbit_Connector.setAngle(angle);
}

function lightIntensityReceived(intensity){
    p5_Microbit_Connector.setLightIntensity(intensity);
}

const dataReceiver = {
    directionReceived,
    lightIntensityReceived
}

const microbit = new MicrobitBLE(dataReceiver);
document.querySelector("#btnConnect").addEventListener('click',function(event) {
    microbit.connect();
});
document.querySelector("#btnDisconnect").addEventListener('click',function(event) {
    microbit.disconnect();
});
                                                         