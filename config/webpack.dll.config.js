const path = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// dll文件存放的目录
const dllPath = '/dll'

module.exports = {
    entry: {
        // 需要提取的库文件
        vendor: ['react', 'react-dom', 'react-router-dom', 'less-loader']
    },
    output: {
        path: path.join(__dirname, dllPath),
        filename: '[name].js',
        // vendor.js中暴露出的全局变量名
        // 保持与 webpack.DllPlugin 中名称一致
        library: '[name]_[hash]'
    },
    plugins: [
        // 清除之前的dll文件
        new CleanWebpackPlugin(),
        // manifest.json 描述动态链接库包含了哪些内容
        new webpack.DllPlugin({
            path: path.join(__dirname, dllPath, 'manifest.json'),
            // 保持与 output.library 中名称一致
            name: '[name]_[hash]',
            context: process.cwd()
        }),
        // 添加 进度条
        new WebpackBar()
    ]
}
