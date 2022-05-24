const http = require('http'); 
const file = require("fs");

 /*
  Módulo de File
*/
http.createServer(function (req, res) {   
     file.readFile('./prueba.html', function(err, data) {    
      res.writeHead(200, {'Content-Type': 'text/html'});     
      res.write(data);     
      res.end();   
    }); 
}).listen(8080);
  