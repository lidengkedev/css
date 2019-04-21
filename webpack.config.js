const path = require('path')

const config = {
    entry: {
        main: path.join(__dirname, './src/js/main.js'),
        other: path.join(__dirname, './src/js/other.js')
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    devtool: '#eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        clientLogLevel: 'info',
        host: 'localhost',
        port: 8001,
        hot: true,
        open: false,
        publicPath: '/',
        proxy: {},
        quiet: true,
        watchOptions: {
            poll: false
        },
        overlay: {
            warnings: true,
            errors: true
        },
        // 此选项允许您将允许访问dev服务器的服务列入白名单。
        allowedHosts: [
            'github.com',
            'gitee.com'
        ]
    }
}
console.log('http://localhost:8001/')
module.exports = config