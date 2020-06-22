function directionReceived(angle) {
    setAngle(angle);
}

function lightIntensityReceived(intensity){
    setLightIntensity(intensity);
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
                                                         