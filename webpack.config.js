var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.tsx',
        vendor: ["react", "react-dom", "redux", "react-redux"]
    },
    output: {
        path: '/',
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    devtool: "source-map",

    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    
    module: {
            loaders: [
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: ["vendor"]
            }
            ),
            new HtmlWebpackPlugin({
                chunks: ['vendor', 'app'],
                template: "./src/index.html"
            })
        ]
}
