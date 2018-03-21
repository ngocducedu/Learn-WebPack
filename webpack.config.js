const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
        rules: [
            {
              test: /\.(js|jsx|css)$/,
              exclude: /node_modules/,
              use: ['babel-loader',           
                    'style-loader',
                    'css-loader'
                    ]
            }
          ]
    },
    resolve: {
    extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};  

