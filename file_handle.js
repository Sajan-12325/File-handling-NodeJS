var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    fs.readFile('demo_file.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();

    });

}).listen(8080);


var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function(err, file){

    if (err) throw err;
    console.log("Creaated using open");
});



var fs = require('fs');

fs.Writefile('mynewfile2.txt', 'Hello Sajan....', function(err){
if (err) throw err;
console.log("Updated the above file with some text....");

});