// Mientras un array puede mantener cosas. Un objeto puede añadir distintos tipos de datos. Asimismo, nos muestra qué caracteristicas tiene.
let persona = {
    "nombre":"Martín", 
    "edad":27,
    "altura": 1.80,
    "habilidades":["Magics", "Paciencia"]
}

// Para acceder a la propiedad dentro del JSON. La diferencia entre una u otra es que la segunda puedes colocar una variable.

console.log(persona.nombre);
let propiedad = "edad";
console.log(persona[propiedad]); 
console.log(persona.habilidades);

// Para buscar dentro, se imprime el array.
console.log(persona.habilidades[1]);

// Si se quiere una lista de la compra con precios se puede utilizar JSON.

/* Si se desea más de una persona dentro de los objetos.
*/

let personas = [
    {
        "nombre":"Martín", 
        "edad":27,
        "altura": 1.80,
        "habilidades":["Magics", "Paciencia"]
    },
    {
        "nombre": "Ryan",
        "edad": 27,
        "altura": 1.5,
        "habilidades": ["correr","inglés","comer"]
    }
]

/*
 Para recorrer este objeto, al estar dentro de un array se tendría que colocar:
 1. Nombre
 2. El índice del array.
 3. (.) propiedad del objeto.

 - Si cuenta dentro de una propiedad un array, se rercorre dentro del mismo.
*/

console.log(personas[1].nombre);
console.log(personas[0].habilidades[1]);

/*
    Objeto: Coche
        Propiedades:
            Color
            Matrícula.
            Número de asientos
            Número de puertas.
            Marca.
            Caballos.
            Arrancar.
            Acelerar.
            Frenar.
            
*/

let coche = {
    "color":"Negro",
    "Matrícula": "010XCS",
    "numeroDeAsientos":"5 plazas",
    "numeroDePuertas": "4",
    "Marca":"Volkswagen",
    "Caballos": "220",
    "RevisionesPasadas":[2001,2004,2007,2010,2013,2016,2019],
    "start": (gasolina, llave, bateria) => { if (gasolina && llave && bateria) console.log("ACELARA");},
    "accelerate": () => {console.log("A todo gas!");},
    "break": function frenar(){
        console.log("para");
    }
    // Se puede cambiar los nombres de la función por toda la función en general. 
}

coche.start(true, true, true);

/* 
¿Cómo se hace una función arrancar?

 function arrancar(gasolina,llave, bateria){
     if(gasolina && llave && bateria);
    console.log("Arrancó");
}
 arrancar(true, true, true);

Si arrancar es una función, start se volvería una función también.

*/




console.log(coche["Numero de asientos"]);
console.log(coche.numeroDeAsientos);
console.log(coche.Marca);


// FUNCIONES II

function saludar (nombre,birthYear) {
    let years = 2020 - birthYear
    // Una forma es alert ("Hola"+ nombre + "tienes" + years + años)
    return () => {
        alert ("Hola"+ nombre + "tienes" + years + años);
    };
}

/*
La función de saludo se la devuelver 
1. Dentro de una nueva variable declarada.
2. Ejecutarla tal que así:
        saludar("Lina", 1994)(); <--- Este segundo () es para llamar a la segunda función. 
        ESTO SE CONOCE COMO CURRIFICACIÓN. 
*/

let clientes = [
    {
        "nombre": "Pepito",
        "apellido": "Paco",
        "numeroCuenta": "ES53 21131313",
        "DNI": "344453-W",
        "saldo": 1213313,
    },
    {
        "nombre": "Luisa",
        "apellido": "Marin",
        "numeroCuenta": "ES33 5464632",
        "DNI": "89674653D",
        "saldo": 10,
    }
];

function enviarTransferencia(cuenta, receptor, dineroEnviado){
    if (cuenta.saldo >= dineroEnviado){
        cuenta.saldo -= dineroEnviado;
        receptor.saldo += dineroEnviado;
        return () => {
            alert("Operacion Realizada con éxito. Nuevo saldo es:" + cuenta.saldo + "euros");
        }
    }
    return () => {
        alert("No tienes saldo suficiente.")
    }
};

enviarTransferencia (clientes[0], clientes[1], 100)();
// Por el momento no se envía, para que sea así se pone el ();


// FUNCION COMO ARGUMENTO.

function operar(array, func) {
    console.log(array);
    console.log(func);
    // func();
    // Aquí llamamos la función. 
    for (let i=0; i < array.length; i++) {
        func (array[i]);
    }
}

operar([0, 1, 2], (num) => {return num + 1})


// Formas más cortas de utlizar el IF como Operador Ternario.
// Solo se permite cuando se quiere devolver algo hacia afuera. 

let miEdad = 17;
let resultado = (miEdad < 18 ? "No apto" : "Apto"); 

let persona = {
    "edad": 18
}

/*
 Si persona no estuviera definida: 
        console.log(Persona ? Persona.edad : undefined);
 Se considera buenas prácticas porque eliminas líneas
 Si algo vale NULL = False.
 Todo lo demás se considera true.
*/