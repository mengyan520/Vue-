const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    //入口，表示，要使用 webpack 打包哪个文件
    entry:path.join(__dirname, './src/main.js'),
    output: {
        // 指定 打包好的文件，输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        // 这是指定 输出的文件的名称
        filename: 'bundle.js'
    },
    devServer: {
        open: true,//打开浏览器
        port: 3000,//设置端口号
        // contentBase: 'src',//指定打开目录
        hot: true //启用热更新 的 第1步
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 创建一个 在内存中 生成 HTML  页面的插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=43960' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
          "vue$": "vue/dist/vue.js"
        }
      }


}