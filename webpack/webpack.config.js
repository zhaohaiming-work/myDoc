var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = {
    //插件项
//     plugins: [commonsPlugin],
    plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")],
    //页面入口文件配置
    entry: {
        index : __dirname+'/src/js/index.js'
    },
    //入口文件输出配置
    output: {
        path:__dirname+'./dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        historyApiFallback:true,
        contentBase : "./",
        open : true,
        port: 9000,
        inline: true,
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
   
};