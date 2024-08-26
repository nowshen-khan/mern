// server/index.js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("This is the Home Page");
	} else if (req.url === "/about") {
		res.end("This is the About Page");
	} else if (req.url === "/contact") {
		res.end("This is the Contact Page");
	} else if (req.url === "/file-write") {
		fs.writeFile("demo.txt", "hello world", (err) => {
			if (err) throw err;
			res.end("File created successfully");
		});
	} else {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.end("<h1>404 Not Found</h1>");
	}
});

server.listen(5500, () => {
	console.log("Server listening on port 5500");
});
