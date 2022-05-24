// Document Object Model 
    // El modelo de objetos del documento. 

let title= document.getElementById ("titulo");
// Significa que coja el elemento por el ID
console.log(title.innerHTML);
title.innerText = "Javascript controla";
title.innerHTML+="<h1>Holiwi</h1>"
title.style.color="red";

/*
 .innerText: Se utiliza para modificar el elemento como elemento texto. En este caso el contenido del h1. 

 .innerHTML: Se utiliza para que se modifique como un elemento de HTML. 
 */

// let rojo = document.getElementsByClassName("rojo");

let input = prompt("Cuantos años tienes?");
let age = document.createElement("p");
age.innerText= "Tu edad es:" + input;

let cuerpo= document.getElementById("cuerpo2");
cuerpo.appendChild(age);

/*
 Se genera un nuevo párrafo. A la variable se le agrega el texto. La variable age se le agrega a título. 
 Es útil para añadir elementos que no conozcamos
*/

/*  
Eventos
    Cuando pase algo:
        - onclick: 
            Se utiliza para que pase algo cuando uno realiza click sobre un elemento.
            El propio onclick pasaría un argumento.  
*/

let clickDiv = document.getElementById("click");

clickDiv.onclick = (event)=> {
    console.log(event.target);
    // Se utiliza para saber en qué elemento se ha hecho click. 
    console.log(event);
    // event.target.style.color="pink"; <-- Esto se utiliza para cambiar de color cada vez que se cliquée.
    document.location= "https://google.com";
    // Este elemento se utiliza para redireccionar a otra página.
    //  window.ope("https://google.com", "_BLANK"); BLANK signifca a una nueva pestaña. 

};

/* 

function click (event) {
    console.log(event);
}

(event) => console.log(event)
*/

/* 
API BOM
    - Browser OBject Model. 
        Cambia los elementos de la URL. Tanto en la misma ventana como en la siguiente. 
        - document.location= "https://google.com";
    Este elemento se utiliza para redireccionar a otra página.
        - window.open("https://google.com", "_BLANK"); BLANK signifca a una nueva pestaña. 

*/

let pepe = document.getElementById("form");
pepe.onkeydown = (event) => {
    console.log(event);
    event.target
    // Esto se realiza para guardar y observar lo que hay dentro de input. Para conocer el valor de lo guardado dentro de input se utiliza = .value.
    // Con el evento onkeyup -> Te devuelve el resultado en la consola, SOLO cuando el usuario levanta el dedo de la tecla. 
}

/* 
event.key -> event que es la función devuelve un parámetro y tiene una propiedad que es key.

*/

// Sólo se utiliza para un apartado "input".Esta se utiliza para hacer registro de mientras estés PULSANDO una tecla. 


/*

Otra forma de llevar los Eventos.
A raíz de una etiqueta que se llama Listener (=escuchador)
Esta función está en "continua" escucha y atento a las situaciones. 

    let oyente = document.getElementbyId("zapato");

    oyente.addEventListener("click","saludo");
    function saludo (){alert ("HOLa");} 
        * Podemos meter también funciones
        * El click es una propiedad que está relacionada con el evento. 
    
    document
        .getElementById("zapato");
        .addEventListener("click", (event) => event.target.src="");
        
    let varH1 = document.getElementById("zapato");

    varH1.onclick= (event) => {
        event.target.src = "imagen.img";
    };

    varH1.addEventListener("click", (event) => event.target.src =imagen.img"));

** Elementos de buenas prácticas.

let arrayFrutas = ["banano","pera", "sandia","melocoton"];

for (let i=0; let j=arrayFrutas.length; i<j; i++){
    // **Para que no quite memoria y no vaya tan lento, se declara una variable auxiliar que guarde el "arrayFrutas"
}*/