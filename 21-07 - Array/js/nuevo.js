z// let a = [5, 4, 34,54];
// console.log(a);
// console.log (a[2]);

// // Para conocer la longitud:
// // Los bucles se utilizan en mejor medida para conocer los array.

// let i = 0;
// while ( i< 4 ) {
//     console.log(a[i]);
// } 

// /* 
// ---> Array Methods.
//         - Array.length
//             * Si no conozco la longitud exacta del array, tendría que "preguntarle" cuántos elementos tiene dentro

//         LIFO --> EL PRIMERO QUE ENTRA Y EL ÚLTIMO QUE SALE. 
//         - Array.push
//             * Añades al final.
//         - Array.pop 
//             * Eliminas desde final
//             * Te muestra el último número eliminado.
//             * Nunca tiene parámetro en los ().
//             * "a.pop ()"
        
//         FIFO --> El último qe entra y el primero que se pone. 
//         -  Array.unshift 
//             * Añade algo por delante del array. 
//         -  Array.shift
//             * Elimna el primer elemento. 
//             * Tampoco tiene parámetros entre los ()
//         -  Array.sort 
//             * Organiza los elementos de menor a mayor. 
//             * Tampoco tiene parámetros.
//         - Array.splice
//             * Se le puede dar dos elementos
//                 1. (DONDE) En qué posición quiere eliminar un elemento 
//                 2. (CUANTOS) El # de elementos.
//             * Te devuelve los elementos que han eliminado. 

//         - Array.map
//         - Array.filter
//         - Array.reduce
// */

// console.log( "Longitud:", a.length);  
// // Con esto la consola accede a su propia longitud.

// console.log ("a.length - 1 (último)", a[a.length - 1]);
// // Esto es para conocer el último elemento del array. 

// // LIFO
// console.log(a);
// console.log( "push", a.push(28,3,6,7,2));
// console.log(a);
// a.pop();
// console.log(a);

// // FIFO.
// console.log(a);
// a.unshift(7, 3, 4, 5, 6);
// a.shift();
// a.sort();
// a.splice(3, 2)

// // Array dentro de un array.

// let a =[[4,5],5];
// let array2 = a[0];
// array2[0]
// Esto visualizaría elementos dentro de un array.



/*
- Itinerar por arrays:

let array = ["Pepe", "Margarita", "Susana", "Pedro"]

fuction transform (array) {
    let result = [];
    for (let i=0; i < array.length: i++) {
        result.push ( "Nombre: " + array[i])
    } return array[i]
}

OTRA FORMA DE ITINERAR:

array.map((elemento, posicion) => {
    return "Nombre: " + elemento;
    // Se le añade a un nuevo array. 
    
})  --- La función que tu estás pasando como parámetro se va a llamar tantas veces como elemento tenga en mi array

    ** COMO FUNCIONA POR DENTRO **
    fuction map (array, func) {
        let result = [];
        for( let i= 0; i < array.length; i++){
            result.push(func(array[i], i));
        }
    }
*/

/* 
.join (",")
Todos los elementos de un array, van a ser separados por los elementos --> Esto devuelve un string concatenado.

notas.filter ((nota, i) => {
    return nota >= 5;
}

*   
    Te va a devolver un array con los elementos que      pasen una condición. 
    En notas.filter devuelve un array con las notas mayores de 5. Sólo se añaden los true a los array, es decir, los que cumplan la condición. 
*

notas.filer ((elemento, position) =>{
    for (let i = id +1; i < notas.lengt; i++) {
        if (nota === notas[i])
            return false;
    }
    return true;
});

new Set(notas);
Para generar un array de los elementos del Set [...new Set(notas)];
TODOS LOS ELEMENTOS DEL Set PUEDEN SER UNICOS. 



Dado un array, se puede aplicar el método reduce() 

notas.reduce((acumulado, elValorNota, posicion) =>{
    return acum + elValorNota;
}) <-- Esta suma total de todas las notas.

let string = ["Hola", "que", "tal"]
string.reduce((acum, string, id) => {
    return acum + " " + string;
});

string.forEach((string, position, originalArray) => {
    return string
    // NO AFECTA A NADA. SINO QUE JUEGAS CON CADA ELEMENTO DEL ARRAY. 
})

ESPECIALMENTE UTIL PARA OBJETOS:

Persona = {
    "nambre": "Li",
    "apelido": "lopo"
}
for (let i in Persona){
    console.log(Persona[i])
};

Un for desde la i=0 hasta strings[i]

*/