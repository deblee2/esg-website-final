const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://3.34.98.69:5000',
            //target: 'http://:5000',
            changeOrigin: true,
        })
    );
};