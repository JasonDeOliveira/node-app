//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world');
});
//listen to port 3000 by default
let server = app.listen(process.env.PORT || 3000);
 
//module.exports = app;

function stop() {
    server.close();
  }

module.exports = server;
module.exports.stop = stop;