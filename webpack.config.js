var config = {
    module:{
        rules:[
            {
                test: /\.ts?$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    }
}

var connectorDev = Object.assign({}, config, {
    mode: "development",
    entry: "./src/p5.microbit.connector.js",
    output: {
       path: __dirname + '/dist',
       filename: "p5.microbit.connector.js",
       library: "P5MicrobitConnector",
       libraryTarget: 'umd'
    }
});
var bleDev = Object.assign({}, config,{
    mode: "development",
    entry: "./src/microbit.ble.ts",
    output: {
       path: __dirname + '/dist',
       filename: "p5js-ble-microbit.js",
       library: 'MicrobitBLE',
       libraryTarget: 'umd'
    }
});


var connectorProd = Object.assign({}, config, {
    mode: "production",
    entry: "./src/p5.microbit.connector.js",
    output: {
       path: __dirname + '/dist',
       filename: "p5.microbit.connector.min.js",
       library: "P5MicrobitConnector",
       libraryTarget: 'umd'
    }
});
var bleProd = Object.assign({}, config,{
    mode: "production",
    entry: "./src/microbit.ble.ts",
    output: {
       path: __dirname + '/dist',
       filename: "p5js-ble-microbit.min.js",
       library: 'MicrobitBLE',
       libraryTarget: 'umd'
    }
});


module.exports = (env, options) =>{
    if(options.mode === "development"){
        return [bleDev,connectorDev];
    }else if(options.mode === "production"){
        return [bleProd, connectorProd];
    }
}