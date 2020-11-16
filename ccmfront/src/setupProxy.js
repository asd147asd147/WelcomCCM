// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/problem/',
//     createProxyMiddleware({
//       target: 'http://front-to-back:5000',
//       changeOrigin: true
//     })
//   );
//   app.use(
//     '/problemlist/',
//     createProxyMiddleware({
//       target: 'http://front-to-back:5000',
//       changeOrigin: true
//     })
//   );
// };