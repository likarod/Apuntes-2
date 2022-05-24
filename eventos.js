const file = require("fs");

// Se realiza el Stream de lectura de los datos.
let leerStream = file.createReadStream("./prueba.html");
// Cuando se abra el archivo, se tendrá que mostrar en la consola un mensaje.
leerStream.on("open", function(){
    console.log("El Fichero se ha abierto");
});