const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
    },  
    devServer: {
        static: './dist',
        port: 9000,
        open: true,
        hot: true,
      },
    stats: {
        all: false, // Disable all default logs
        errors: true, // Show only errors
        warnings: true, // Show warnings
        colors: true, // Colorize output
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your HTML file
        }),
    ],
};
