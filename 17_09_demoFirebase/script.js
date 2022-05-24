// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAsg7zkVaJvQYUG03_4_-kcMSCxcwgAXUQ",
    authDomain: "d-app-firebase.firebaseapp.com",
    databaseURL: "https://d-app-firebase.firebaseio.com",
    projectId: "d-app-firebase",
    storageBucket: "d-app-firebase.appspot.com",
    messagingSenderId: "740862414419",
    appId: "1:740862414419:web:9c1e5bab67628b27c4c0a6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Método para crear usuario y password
let email= "blabla@gmail.com"
let password= "holamundo123"
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });

//Botones de inicio.
document.getElementById("login").addEventListener("click", ()=>{
   firebase.auth().signInWithEmailAndPassword(email, password)
    .then((datos)=> {
    console.log(datos.user.email)
    console.log(datos.user.uid)
    })
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    }); 
});

document.getElementById("logOut").addEventListener("click", ()=>{
    firebase.auth().signOut().then(function() {
        console.log("el usuario ha cerrado la sesión.")
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
})

function validaEmail(email) {
  
} //Devuelve true/false + mostrar resultado en el DOM.

function validaPass(password) {
  let regPass = /([\w(\@\#\$\%)]{6,20})/
  regPass.test(password);
  let mensaje = `Introduzca una contraseña correcta`
  document.getElementById("resultado").innerText += mensaje + "\n"
} //Devuelve true/false + muestra el resultado en el DOM.


document.getElementById("registro").addEventListener("click", ()=> {
  let email = document.getElementById("email").value;
  let password = document.getElementById("contra").value;
  console.log( email + " "+ password);
  //Valida los valores


  //Registra el usuario al auth Firebase.
})