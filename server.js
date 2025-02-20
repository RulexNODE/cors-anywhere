// cors-anywhere deployed as my own server due to the public demo URL
// restricted to a certain number of uses

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || '8080';

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    removeHeaders: ['cookie', 'cookie2'],
  redirectSameOrigin: true
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
