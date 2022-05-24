/* 

fuction hasAnyUpperCase (str) {
    for (let i=0: i < stre.length; i++){
        if (str[i] === str[i].toUpperCase())
        return true
    }   
    return false
}
fuction handleError (e) {
    e.prevenDefaul();
    document.querySelector ("p#error").innerText = "La contraseña es errónea"
} 
// Esto te genera un validador de errores. 

document.querySelector("input[type='sumit']").addEventListener("click", (e) => {
    // e.preventDefault();
    // Esto es para que no se pinte antes del elemento
    let passwordInput = document.querySelectorAll("main form input['email']");
    for (let i=0; i < passwordInput.length; i++){ 
        let password = passwordInputs[i].value;
        if (password.length < 8) {
            handleError (e);
        }
        if (!hassAnyUpperCase (password)) {
            handleError (e);
        }
    
    }
}

*/ 

/* Cambio de imágen con JS

Con "querySelectorAll" tienes que iterar con una variable nueva y un FOR.

document.querySelector(ID O CLASS DE LA IMAGEN).addEventListener("click", (e) => {
    e.target.src = "src de la img nueva"
}); */

/*
Cambiar la escala de la imágen con JS.
    Además de lo de arriba.

    addEventListener("mouseover", (e) => {
        e.target.style.transform = "scale(2)"; 
        // Con esto no te regresa.
        Si quieres que regrese a su posición inicial que se ponga el "mouseout"
    });
*/

/* 

let nombrePropiedad = "Patata";
let Persona = {
    "nombre": "Laura",
    "edad": 22,
    [nombrePropiedad]: "El valor"
}


** PARA GUARDAR VALORES DE UN FORMULARIO DENTRO DE UN OBJETO:

let valoresDelForm = {}
fuction handleForm (property, value) {
    valorDelForm = {...valoresDelForm, [property]: value};
}
*/
