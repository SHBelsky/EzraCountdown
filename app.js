var express   = require("express");
var app       = express();
require("dotenv").load();
var server    = require('http').createServer(app);

app.use(express.static(__dirname + '/client'));

app.get("/", function(req, res) {
  res.render("index");
});

app.set("port", process.env.PORT || 8080);

server.listen(process.env.PORT, function() {
  console.log("Listening on port " + process.env.PORT);
});
