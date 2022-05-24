//  SOLUCIONES DE KATAS.

// Para generar un array con Fizz y Buzz en las operaciones
// let arrayNuevo = [];
//     for (i=1; i<= n; i++){
//     if (i%3 == 0 && i%5 == 0)
//       arrayNuevo[i - 1] = "FizzBuzz";
//     else if(i%3 == 0)
//       arrayNuevo[i - 1] = "Fizz";
//     else if(i%5 == 0)
//       arrayNuevo[i - 1] = "Buzz";  
//   } return arrayNuevo;
// }

// Encuentra el mínimo íntegro en el array.
// La forma de Ryan
class SmallesIntegerFinder {
    findSmallesInt(args) {
        let smaller = args [0];
        let length = args.length;
        for (let i = 0; i < length; i++) {
            if (args[i] < smaller)
            smaller = args[i];
        }
        return smaller
    }
}

// La forma de Miguel Ángel. 
/* class SmallesIntegerFinder {
    findSmallesInt(args) {
        args.sort((a, b)) => {
            return(a - b) 
        }
        }) [0];
    }
}*/
/* Una función flecha si no tiene llaves devuélve lo que le pides. Si metes las llaves tienes que poner el return.
Si no tiene las flechas no le puedes poner una condición o bucle. */

