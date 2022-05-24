const mariadb = require('mariadb');

// DATOS PARA LA CONEXIÓN - Crea un objeto en JS, pero por el momento no se conecta a nada.
const pool = mariadb.createPool({
    host: 'localhost', 
    user: 'root', 
    password: '',
    connectionLimit: 5,
    database: 'bbdd'
});

/*
 Error 1 - Se colocó un return sin que hubiera una función async antes y no se leía el código de la función crearUsuario.
*/
// Crear "Usuarios"

exports.crearUsuario = async (name, year) => {
    console.log("Usuario creado")
    let conn;
    try{
        conn = await pool.getConnection(); //Abre la conexión.
        let res = await conn.query("INSERT INTO usuarios (name, year) VALUES (?, ?)", [name, year]);
        console.log(res)
        return res
    }catch(err) {
        console.log(err)
        return null
    }finally{
        if(conn) conn.release()
    } // Es importante que se cierre la BBDD para que pueda terminar la conexión - "Libera el recurso"
   
}

// Leer "Usuarios"
exports.leerUsuario = async (ID) => {
    console.log("Usuario obtenido")
    let conn;
    try{
        conn = await pool.getConnection();
        let res = await conn.query("SELECT * FROM usuarios WHERE ID=(?)", [ID]);
        console.log(res[0])
        return res[0]
    }catch(err) {
        console.log(err)
        return null
    }finally{
        if(conn) conn.release()
    } // Es importante que se cierre la BBDD para que pueda terminar la conexión - "Libera el recurso"
}

//Modificar "Usuarios"
exports.editarUsuarios = async() => {}

// Borrar "Usuarios"

exports.eliminarUsuario = async () => {}


// Espacio dedicado para probar la función. 

// crearUsuario("Lucia", 35)
// .then((res)=>console.log("Usuarios creados "+res.affectedRows))
// .catch((e)=> console.log(e))

// leerUsuario(10)
// .then((res)=>console.table(res))
// .catch((e)=>console.log(e))