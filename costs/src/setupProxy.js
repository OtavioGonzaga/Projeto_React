const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/', // Rota da API de destino
    createProxyMiddleware({
      target: 'https://api.render.com/deploy/srv-cid2j2lph6esg7flhaq0?key=k028bCP7yKU', // URL da API de destino
      changeOrigin: true,
      secure: false,
    })
  );
};
