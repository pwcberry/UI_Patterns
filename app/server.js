var http = require("http");
var url = require("url");

var template = '<html><head><title>nodejs</title><body><h1>Welcome</h1>{{content}}</body></html>';

function start(port, route) {
	http.createServer(function(req,res){
		var pathname = url.parse(req.url).pathname;
		var content = "<p><strong>" + pathname + "</strong> requested</p>";
		route(pathname);
		res.writeHead(200, {"Content-Type":"text/html"});
		res.write(template.replace("{{content}}",content));
		res.end();
	}).listen(port);
}

exports.start = start;