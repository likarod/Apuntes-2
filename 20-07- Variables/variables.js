// let num1 = 2;
// let num2 = "2";

// console.log("Suma de num1 + num2", num1+num2);
// console.log("Resta de num1 - num2", num1 - num2);

// let num3 = 4
// console.log("num3", num3);
// console.log("num3", num3++);
// // Este valor sigue siendo 4. 
// console.log("num3", num3); 
// // Este valor dara 5.
// console.log("num3", ++num3);
// // Esto da directamente el valor 5.

// // Condicionales.

// /* 
// Elementos de asignación: 
// > | < | >= <= | == | != 

// 0 == "0" TRUE.
// 0 != "0" FALSE

// ESTRICTOS.

// === (Estrictamente idénticos)

// 0 === "0" FALSE
// 0 !== "0" TRUE

// !==  (Totalmente diferentes)
// */

// let x= 5
// // Queremos que la X esté entre 10 y 20, ó que valga 0.
// if ((x > 10 && x<20) || x === 0) {
//     console.log ("Yuju!");
// }

// // No se puede mezclar las operaciones de && y ||. Solamente se realiza con () para que el navegador pueda interpretarlo. 

// x > 10 && x < 20
// /*
// EN EL AND:
//     Si la primera es TRUE puede leer la segunda opción y ejecuta los dos.
//     Si la primera es FALSE no sigue leyendo.
// En el caso de OR: 
//     Si la primera es TRUE no continúa leyendo la condición.
//     Si la primera es FALSE sí que continúa leyendo y ejecuta. 
// */

// let x= 31;
// if ((x > 10 && x < 20) || x === 0){
//     console.log("Eureka");}
//     /*
//         Todos tus bucles.
//         Todas tus condicones. 
//     */
// //  else {}  Si se pone el "let x=0". Afectaría sólo a este scope, es decir, a este ámbito.
// if (x > 30){
//     console.log(":)");
// } else {
//      console.log( ":(");
// } 
// if (x===30) {
//     let num1 = 0;
//    let num2 = 3;
//  console.log( num1 + num2)} 
//     else {
//         console.log(":((")
//     }
// //  Si lo de dentro del IF o ELSE es sólo una única ejecución. Lo cual, se puede retirar las {} || Sin embargo, si hay dos elementos, sólo se ejecutaría un único elemento y el segundo quedaría fuera. 

// x=0
// switch (x){
//     case 0: 
//         console.log ("Eureka");
//         break;
//     case 10:
//         console.log(":R")
//         break;
//     case 30: 
//         console.log(":D")
//         break;
//     default: "No he encontrado tu opción"    
// }

// /*
//     Dentro de los "case" se podría ejecutar unas condicones. PERO ES MUY MALA PRACTICA. 
//     Analiza casos muy específicos que se puedan ejecutar. Es un poco más eficiente que el IF / ELSE. 
//     El caso DEFAULT es para todo lo demás que no se encuentre en los casos. 
// */

// // BUCLES

// /* 
// Do ... while.
// for
// while. */

// let i="0";
// while (i < 10){
//     console.log(i);
//     i++; // Se puede colocar también en el console.log el i++ ó ++i
// }

// let finished = false;
// do {
//     let input=prompt("¿Cuál es tu contraseña=")
//     if (input==="Abrete sesamo")
//     finished = true;
// } while (!finished);


// /* 
//     Finished = false;
//     !finished = true; // LO CONTRARIO. Su negación. 
// */ 

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// } // Sólo afecta la i a este bucle. Se puede reclarar la variable "iterator", especialmente para los bucles. Si se sale de este scope no se encontraría. 

// console.log("Bienvenido a casa")

// /* FUNCIONES

function suma(){
    let num1 = parseInt(prompt("Introduzca el número 1"));
    let num2 = parseInt(prompt("Introduzca el número 2"));
alert("La suma es:" (num1+num2));
// Las funciones se declaran en este espacio, más no se ha "invocada".
}

let terminar = false;
/* 
Esto es como decir:
    false ==== false
    !false -> true
    !true -> false 
*/
while(!terminar){ 
    suma();
    let input = prompt("Diga S para continuar y N para finalizar");
    if (input === "N"){
        terminar = true; 
        // A patir de aquí no continuaría el bucle. 
    }
}



