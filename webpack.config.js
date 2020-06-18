module.exports = {
    entry: './src/microbit.ble.ts',
    output: {
        path: __dirname + '/dist',
        filename:'p5js-ble-microbit.js',
        library: 'MicrobitBLE',
        libraryTarget: 'umd'
    },
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