module.exports = {
    lintOnSave: false,

    // 配置代理服务器1, 开启http://localhost:8080
    // devServer: {
    //     proxy: "http://localhost:5000" // 真正要请求的服务器地址
    // },
    // 配置代理服务器2
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: { "^/api": "" }, // 请求真实服务器时删除所带的前缀'/api'
                ws: true, // 支持websocket, 默认true
                changeOrigin: true, // 请求真实服务器时是否用真实服务器的端口(欺骗), 默认true
            },
            '/foo': {
                target: 'http://localhost:5001'
            }
        }
    }
}