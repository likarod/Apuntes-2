const http = require("http");
const file = require("fs");
let datos = "";

// Creación del Stream para la lectura de los datos.
const leerStream =  file.createReadStream('./prueba.html');

//Manejo eventro de Stream de lectura del documento HTML. --> "data"
leerStream.on('data', function(caracter) {    
    datos += caracter; 
});
// Evento para cuando se termine de leer el fichero ---> "end"
leerStream.on("end", function(){
    console.log(datos);
});
// Evento para cuando se produzca un error en la lectura de los datos ---> "err"
leerStream.on("error", function(err){
    console.log(err.stack);
});

//Finalizar los eventos.
console.log("Fin de lectura de los datos");