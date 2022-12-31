const { copyFile } = require("fs");

const displayContent = (req, res) => {

    const url = req.url;
    const method = req.method;

    if(url == "/profile"){
        res.setHeader("Content-Type","text/html");
            res.write("This is a profile page!");
            return res.end();
    }else if(url == "/"){
        res.setHeader("Content-Type","text/html");
            res.write("This is a default page!");
            return res.end();
    }
    else if(url == "/settings" && method == "POST"){
        res.setHeader("Content-Type","text/html");
        res.write('Form was submitted');
        return res.end();
    }
    else if(url == "/settings"){
        res.setHeader("Content-Type","text/html");
        res.write('<h1>Settings</h1><form action = "/settings" method = "POST"><input type = "text"><button type = "submit">Press Me!</button></form>');
        return res.end();
    }
    else {
            res.setHeader("Content-Type","text/html");
            res.write('404 Not Found');
            return res.end();
    }

    
    
}

module.exports = displayContent;