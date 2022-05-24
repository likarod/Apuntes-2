/* Programación Funcional.
    - Destinado al mínimo las líneas posibles, para no gastar memoria.
    Es un paradigma: una forma de resolver los problemas dentro de la programación. 
    - Los outputs se conviertes en los inputs de los nuevos elementos.

EJ:
Longitud del nuevo array:
if ([].push(x) > 31)

// Programación Orientada a Objetos.

/* 
- Orientarlo todo a los objetos y sus propiedades.
- Los objetos tipos JSON no son objetos re utilizables. Dado que todos los elementos posteriores se designarían a unas mismas propiedades. 
Los objetos tipo JSON serían estructuras de datos.

EL POO es un nuevo paradigma dentro de la progamación.
    Se generará muchímas instancias (copias) con una sóla declaración de un objeto general.
    
    Tiene propiedades - cualquier valor.
    Tiene métodos - funciones propias de un objeto. Sólo E dentro de ellos. 
    Tipos de métodos de propiedades - públicos [si mi coche tiene una propiedad pública, caulqiuier persona q tiene acceso a la varible coche puede acceder] o privados[no todo el mundo puede leer quién es el autor de dicho coche].
    
    Se basa en consignas:
        Todos los objetos deben tener abstracción. 
            Evitar pensar que es un elemento general. 
                Color.
                Numero de puertas.
            Porque es una estructura común a todos los coches. 
        Encapsulación: 
            No todo el mundo tenga acceso a los datos. 
            Una forma de organización los datos y métodos evitando los accesos a los datos. Por lo tanto, se garantiza la integridad de los datos que continene un objeto. 
            Funciona +/- como el scope.
        Modularización 
            Objeto puede tener otro objeto. 
            EG: El objeto persona puede tener el objeto corazón.
            Que a su vez puede utilizar 
            Se puede heredar otros objetos.
            - SACAR ELEMENTOS COMUNES.
        Jerarquización. 
            La dependencia.
            También objetos que contenga a otros objetos. 
            - SE PUEDE GENERAR JERARQUIAS DIFERENTES. 
            PARA ESTO PRIMERO DEBES TENER UNA MODULARIZACION.
        Herencia.
            Podemos heredad las propiedades o métodos de los elementos padres.
        Poliformismo por sobrecarga.
            Dependiendo del número de parámetros que le asigne un mismo objeto puede hacer cosas diferentes.
            Esto depende de la manera en cómo se llame. 
*/

/* VEHICULOS 
    Clase padre de Coche.
    Si se ha generado una clase superior significa que todos los elementos padres lo necesita los hijos.    
*/

class Vehicle {
    constructor (color, nSeats, type, speedLimit){
        this.color = color;
        this.nSeats = nSeats;
        this.type = type;
        this.started = false;
        this.speed = 0;
        this.speedLimit = speedLimit;
    }

    /* 
        Aquí tendría también el método acelerar o el método arrancar.
        Ya que son elementos comúnes a todos los vehículos. 
    */

}

/* El coche puede heredar las propiedades del padre. A través de...
     class Coche extends Vehicle {
        constructor (plate, color, nSeats, speedLimit) {
          super (color, nSeats, "Coche", speedLimit);

         --> 
            A través de super estás llamando a tu padre para que utiliza las propiedades de color o nSeats. 
            Se pone en super todo lo que necesite el constructor.
            Además de los métosos realizados.
               
        }
     }
*/

let myVehicle = new Vehicle ("Rojo", "200", "Avión");
console.log(myVehicle);

/*
Elemento hijo: 
            COCHE
*/

class Coche { 
    /* 
        Aquí construyes un modelo de coche. No en general un elemento en sí.
    */ 
    constructor (plate, color, nSeats){ 
    /* 
        Se encarga de darle al coche unas propiedades específicas. Es un método que puede recibir parámetros. 
    */ 
    
        /*
            this. -> Es un elementos nominal para poder llamar a lo que está dentro del constructor y la variable que la designa.
            Se refiere a cada instancia del objeto.
            ¿Quién define este valor? Cada elemento que se crea a partir de este objeto. 
        */
        this.plate = plate;
        this.color = color;
        this.started = false;
        this.revisions = [];
        /*
         Las propiedades que le pongas un valor no se pueden cambiar. 
         Esto es especialmente útil para que el usuario no tenga propiedad sobre esto.
        */
    }
    /* 
    Fuera del constructutor se declararan los métodos 
    */ 
     /* 
        this.started === false --> Arranca.
        this.started === true ---> No hace nada. 
     */
    /* */
    arrancar (started) {
        console.log("Buuumss");
        this.started = true;
        /* Puede arrancar a miCoche, pero no puedo arrancar a tuCoche a menos que llame a la función.
        */
    }
    /* 
     ARRIBA | Sigue siendo pública pero no se puede generar un cambio a raíz de esto. 
    Si fuese privada es que no pudiése verla. 
    */
   acelerar () { 
       if (this.started) {
           console.log("FIUEEEE");
       } console.log ("No estoy arrancado.");
    }

    set setRevision (status) {
        this.revision.push(status);
    }
    /*
        Cada vez que se llame al setter se añadirá al push una nueva revisión.
            - Funciona como si fuera una función, pero se llama como una propiedad.   
    */
    get getRevision () {
       let result = []
       for (let i = 0; i < this.revisions.length; i++) {
         result.push ("La revisión" + i + "es:" + this.revisions[i]); 
       }
       return this.revisions.map((revision, position) => { "La revisión " + revision + "es" + position}
       );

     /* 
     Puedes acceder al getter y modificarlo. 
     */
       
    }}

let miCoche = new Coche ("123453ADV", "azul",4);
    /* 
            - Se generará un coche con nuevos elementos específicos. 
            - Cambiar propiedades:
        miCoche.color = "azul" 
    */
miCoche.arrancar();
miCoche.setRevision = "OK";
miCoche.setRevision = "Estado perfecto";
miCoche.setRevision = "Perfecto";
console.log(miCoche.getRevision)

/*
Los get y los set puede tener el mismo dependiendo de la forma de llamarlo. 
Esto depende del poliformismo de sobrecarga. 

a = [0, 1, 3, 4]
a.length <--- ESTO ES UN GETTER PORQUE DEVUELVE UN VALOR.

Cuando le pongo:
    a.length = 1; <--- ESTO SERIA UN SETTER.
    Dado que lo estás redefiniendo. 
    En su declaración el array, por detrás, tendría una estructrua tal que así
        set length (longitude){
            this.values.slice(0, longitude)
        }

*/


/* 
    Ventajas:
    - Podemos crear otor coche con otras matrículas, con distintas propiedades de color y tenga distintas plazas. 
*/ 

/* 
    ¿Un avión puede arrancar y acelerar? 
    - No tiene sentido que se cree las mismas propiedades en varios objetos. 
*/

/* 

Se obtiene de un elemento principal a elementos más "específicos".

Es decir:
     Vehículo
        Vehículos aéreos / Vehículos acuáticos / Vehículos terrestres
            Vehículos terrestres con matrícula.
            Vehículos terrestres sin matriculas. 
    Siempre tiene un bisabuelo, abuelo, padre, etc...
*/

/* 
Getters y Setters en JS 

Getters 
    Sobrescribir.
    Sirve como una función que nos hace un return. 
        Cuando la persona reciba el mensaje conoce la info detrás que ha colocado el SETTER.
        El getter confirma y reenvia la info de cuándo se leyó.

Setter.
    
    Altera la propiedad, pero permite realizar otras cosas. 
        Es una función que recibe el mensaje
        y analiza cuando se envió


Queremos saber cuántas veces se han consultado esta propiedad.

*/

