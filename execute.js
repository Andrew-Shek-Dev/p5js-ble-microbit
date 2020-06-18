function directionReceived(angle) {
    console.log(angle);
}

const dataReceiver = {
    directionReceived
}

const microbit = new MicrobitBLE(dataReceiver);
document.querySelector("#btnConnect").addEventListener('click',function(event) {
    microbit.connect();
});
document.querySelector("#btnDisconnect").addEventListener('click',function(event) {
    microbit.disconnect();
});
