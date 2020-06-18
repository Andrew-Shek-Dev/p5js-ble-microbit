const UART_Service_UUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const UART_Service_RX_UUID = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';
const UART_VALUE_CHANGED_EVENT = 'characteristicvaluechanged';

export interface IDataReceiver{
    directionReceived:(angle:number)=>{}
}

export default class MicrobitBLE {
    private device:any;
    constructor(private dataReceiver:IDataReceiver){}
    connect=async()=>{
        this.device = await (navigator as any).bluetooth.requestDevice({
            filters: [{namePrefix: "BBC micro:bit"}],
            optionalServices:[UART_Service_UUID]
        });
        const server = await this.device.gatt.connect();
        const service = await server.getPrimaryService(UART_Service_UUID);
        const characteristic = await service.getCharacteristic(UART_Service_RX_UUID);
        characteristic.startNotifications();
        characteristic.addEventListener(UART_VALUE_CHANGED_EVENT,this.onReceiveDirection);
    }

    onReceiveDirection=(event:any)=>{
        const view = event.target.value;
        const value = new Uint8Array(view.buffer);
        this.dataReceiver.directionReceived(String.fromCharCode.apply(String, value).split(":")[1]);
    }
    
    disconnect=async()=>{
        if (!this.device) return;
        if (this.device.gatt.connected) {
            this.device.gatt.disconnect();
        }

    }
}