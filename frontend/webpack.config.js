const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [        
        path.join(__dirname, 'src', 'index')
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/public/'
    },
  
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            use: [{
                loader: 'babel-loader'
            }]
            
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
   
    performance: {
        hints: false
    }, 
    optimization: {
        minimize: false
    }
}
