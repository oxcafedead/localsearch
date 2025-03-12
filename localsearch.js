const http = require('http');

const server = http.createServer((req, res) => {
  const query = req.url.split('?q=')[1];
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`Hello! Your search is <pre>${query}</pre><br>Search via duckduckgo: <a href="https://duckduckgo.com/?q=${query}">https://duckduckgo.com/?q=${query}</a>`);
}).listen(80, '0.0.0.0');

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
