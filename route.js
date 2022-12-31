const displayContent = (req, res) => {

    const url = req.url;

    switch(url){
        case "/profile":
            res.setHeader("Content-Type","text/html");
            res.write("This is a profile page!");
            return res.end();
        case "/":
            res.setHeader("Content-Type","text/html");
            res.write("This is a default page");
            return res.end();
        default:
            res.setHeader("Content-Type","text/html");
            res.write("404 Not Found");
            return res.end();
    }

}

module.exports = displayContent;