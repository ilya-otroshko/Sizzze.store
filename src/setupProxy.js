const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://sizzzeapi.herokuapp.com',
      ws: true,
      changeOrigin: true
    })
  );
};