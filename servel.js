var Express = require("express");

var app = Express();

app.get("/", (request, response) => {
    response.status(200).send("Mi respuesta chachi");
});

app.get("/test", (request, response) => {
    response.status(500).send({ "message": "This is an error response" });
});

var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;