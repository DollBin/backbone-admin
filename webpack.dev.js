/**
 * webpack 开发调试
 *
 * Created by zhoubin1 on 2016/3/30.
 */

var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        common:["backbone","underscore","jquery"],
        index: "./src/entry/index.js"
    },
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js$/i,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/i,
            loader: ExtractTextPlugin.extract("css-loader")
        }, {
            test: /\.png$/,
            loader: "url-loader?limit=100000"
        }, {
            test: /\.jpg$/,
            loader: "file-loader"
        }, {
            test: /\.html$/i,
            loader: "html-loader"
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery",
            Backbone:"backbone",
            _:"underscore",
            BackboneLocalstorge:"backbone.localstorage"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"common",
            filename:"common.js",
            minChunks:Infinity
        }),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title: "Todo Example",
            filename: "index.html",
            template: "./src/index.html",
            inject: "body"
        })
    ]
}
