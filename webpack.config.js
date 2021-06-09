const path = require('path');

module.exports = {
    mode: "development",
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader',
                    'css-loader'],
            },
        ],
    },
    devtool: "source-map",
};