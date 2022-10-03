const { createProxyMiddleware } = require('http-proxy-middleware');

// ProxyServer 역할
// 1. 방화벽 기능
// 2. 웹 필터 기능
// 3. 캐쉬 데이터

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};