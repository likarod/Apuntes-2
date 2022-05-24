/*
- LocalStorage es lo más parecido que se verá en BBDD. Se encuentra a nivel de navegador. 
Tiene mucha más capacidad que unas cookies de almacenamiento.
Se utiliza especialmente para agilizar. Dado que se almacena en el ordenador X datos, para poder trabajar con éstas. Dado que son datos persistentes. 

- SessionStorage. Funciona sólo cuando la sesión está activa. Es decir, cuando se cierre el navegador se perderían los datos. 
*/

let boton = document.getElementById("btnForm");
let arr = [];
boton.addEventListener("click", ()=> {
    let nuevoUser= {
        "name":document.getElementById("nUsuario").value,
        "apellido":document.getElementById("lname").value,
        "email":document.getElementById("email").value,
        "telefono": document.getElementById("telefono").value
    }
    if (JSON.parse(localStorage.getItem("Usuarios")) === null) arr = [];
    else arr = JSON.parse(localStorage.getItem("Usuarios"));
    arr.push(nuevoUser);
    localStorage.setItem("Usuarios", JSON.stringify(arr))
    
});

let quitar = document.getElementById("borrar");
quitar.addEventListener("click",()=>{
    localStorage.clear();
})

function borrarUsuario(){
  let user = JSON.parse(localStorage.getItem("Usuarios"));
 for (i=0; i<user.length;i++) {
   let name = document.getElementById("eliminarUser").value;
   if (name === user[i].name) 
    user.pop(i)
 }
 localStorage.setItem("Usuarios", JSON.stringify(user))
}; 

document.getElementById("brUsuario").onclick = () => {
  borrarUsuario();
};


function escribirDatos() {
    let data = JSON.parse(localStorage.getItem("Usuarios"));
    console.log(data);
    for (i = 0; i < data.length; i++) {
      let info = `
    <div>
    <img src="https://api.adorable.io/avatars/50/${data[i].email}.png" alt="avatar${i}">
    <p class="dataName"> Nombre: ${data[i].name}</p>
    <p class="dataMail"> Email: ${data[i].email}</p>
    <p class="dataPhone"> Teléfono: ${data[i].telefono}</p><br>
    </div>`;
      document.getElementById("infoLis").innerHTML += info;
    }
  }

document.getElementById("btnForm").onclick = () => {
meterDatos();
};

escribirDatos();