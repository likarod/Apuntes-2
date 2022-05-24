// Se utilizará el Módulo para manejar eventos.
const events = require("events");

// El Objeto que emite los eventos. --> EventEmitter función dentro de la clase new events.
const emitirEvento = new events.EventEmitter();

//Función que maneja el evento creado
let alarmaHorno = function() {
    console.log("Pizza lista para comer");
}

// En este apartado se llama a mi variable emitirEvento y asigno el manejo del evento.
emitirEvento.on("pizza_lista", alarmaHorno);

//Aquí se dispara el evento. Para ello se llama a mi varible emitirEvento + .emit
emitirEvento.emit("pizza_lista");

