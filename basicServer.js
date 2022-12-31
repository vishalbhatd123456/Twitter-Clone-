const http = require('http');

const server = http.createServer((req,res) => {
    //this will be written over the server page
    res.write("Art of living");
    res.end();
});

server.listen(3002);