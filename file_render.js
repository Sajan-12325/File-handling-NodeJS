var http = require('http');
var fs = require('fs');
var url = require('url');

function renderHTML(path, res) {
    fs.readFile(path, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('File not Found!!!');
            res.end(); // 
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' }); // 
            res.write(data);
            res.end();
        }
    });
}

module.exports = {
    handleRequest: function (request, res) {
        var path = url.parse(request.url).pathname;
        

        switch (path) {
            case '/':
                renderHTML('./demo_file.html', res);
                break;
            case '/login':
                renderHTML('./other.html', res);
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('No file found or data error here');
                res.end();


        }
    }
};
