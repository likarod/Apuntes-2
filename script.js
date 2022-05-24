const http = require("http");
const file = require("fs");
const path = require("path")
const cowsay = require("cowsay");

console.log(path)

let port = 3000;
let host = "127.0.0.1";
http.createServer(function (req, res) {
    let url = req.url; //URL de petición
    if(url ==='/') {
        res.write(cowsay.think({
            text: "Estas en INICIO",
            e: "oO",
            T:"X",
        })); 
    }else if(url ==='/economia') {
        file.readFile("./economia.html", function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    } else if(url ==='/contacto') {
        file.readFile("./contacto.html", function(err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    } else if(url ==='/amistad') {
    file.readFile("./amistad.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end()
    })} else if(url.match("\.jpg$")){
        let image = path.join(__dirname,"public", url);
        let fileStream = file.createReadStream(image);
        res.writeHead(200, {"Content-Type": "image/jpg"});
        fileStream.pipe(res);
    } else {
    file.readFile("./error.html", function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    })}
}).listen(port, host, function() {
    console.log(`server start at port 3000 \n Conectado a: http://${host}:${port}`); 
});
