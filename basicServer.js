const http = require('http');

const server = http.createServer((req,res) => {

    const url = req.url;
    if(url == "/profile"){
        //this will be written over the server page
        res.setHeader("Content-Type","text/html");
        res.write("Art of living Profile Page!!");
        return res.end();
    }else if(url == "/home"){
        res.setHeader("Content-Type","text/html");
        res.write("Art Of Living Home Page");
        return res.end();
    }

    //this will be written over the server page
    res.setHeader("Content-Type","text/html");
    res.write("Page Not Found 404!!");
    res.end();
});

server.listen(3002);