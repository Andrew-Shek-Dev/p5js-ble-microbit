# p5js-ble-microbit
Collecting Micro:Bit Information and manipulate information on the browser with p5.js

## How to use?
Add the following line in the header section
```
<script src='./dist/p5js-ble-microbit.min.js'></script>
```

## How to connect to the Micro:Bit?
Add following code in the the js file (MUST be placed in button click event), for example,
```
const microbit = new MicrobitBLE(dataReceiver);
document.querySelector("#btnConnect").addEventListener('click',function(event) {
    microbit.connect();
});
```

## Collect information from Micro:Bit
### Direction Information
Define following function:
```
function directionReceived(angle) {
    console.log(angle);
}

const dataReceiver = {
    directionReceived
}
```

Pass the "dataReceiver" to Microbit constructor
```
const microbit = new MicrobitBLE(dataReceiver);
```

### Remark
Full example can be found in index.html and execute.js
