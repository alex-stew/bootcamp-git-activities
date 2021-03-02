const http = require('http');
const fs = require('fs');

// Set our port to 7025
const PORT = 8080;

// Create a function for handling the requests and responses coming into our server
const handleRequest = (req, res) => {
    // Here we use the fs package to read our index.html file
    const path = req.url;

    switch (path) {
        case '/':
            return fs.readFile(`${__dirname}/index.html`, (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
        case '/food':
            return fs.readFile(`${__dirname}/favFood.html`, (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
        case '/mov':
            return fs.readFile(`${__dirname}/favMov.html`, (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
        case '/css':
            return fs.readFile(`${__dirname}/favCSS.html`, (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
    }
};

// Create our server
const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});