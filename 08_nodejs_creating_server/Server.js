const http = require("http");

const router = require("./router/appRouter");

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  router.mapRoutes(request, response);
});
server.listen(port, hostname, () => {
  console.log(`Node js server started at:${hostname}:${port}`);
});
