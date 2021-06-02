var http = require('http');

http.createServer(function (req, res) {
  res.write("the bot is working! (becuase yair is a pro coder)");
  res.end();
}).listen(8080);