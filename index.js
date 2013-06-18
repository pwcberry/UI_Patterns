var server = require("./server");
var router = require("./router");

server.start(8000, router.route);

console.log("server started on port: 8000");