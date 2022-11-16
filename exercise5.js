import http from 'http';

const PORT = 80

const server = http.createServer((request, response)=>{
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World!\nI need some food!");
});

server.listen(PORT);
console.log(`Server running at http://127.0.0.1:${PORT}/`);
