const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  //Generación de la BBDD -> Colecciones. 
  var dbo = db.db("mydb");
  //Esto signfica que acceder a la BBDD .db("mydb"). 


  /*
    ---------> Aquí creas la collection nueva. 

  dbo.createCollection("clientes2", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  */

/*

  ------------> Aquí inserta varios documentos en la colleción. Se utiliza el parámetro .insertMany()

let myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];

  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
  */

  // Búsqueda de un elemento con una clave.
 let query = { name: "Betty" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });

  // Búsqueda de sólo un elemento.
  dbo.collection("customers").findOne({},function(err, result) {
    console.log("Escribre el primero")
    if (err) throw err;
    console.log(result);
    db.close();
  });
  dameDatos(db,3);

  actualizar(db, "Hannah", "Montana");

  borrar(db, "Michael")
}); // Aquí termina el connect.

// En esta función le solicitas un dato. 

function dameDatos (db, n) {
  let dbo = db.db("mydb");
  let mysort = { name: 1}
  dbo.collection("customers")
  // Con este módulo puedes buscar y excluir elementos propios. 
  .find({}, { projection: { _id: 0, address: 0}})
  // Genero el límite de búsquedas. 
  .limit(n)
  // Para ordenarlos.
  .sort(mysort)
  .toArray(function(err, result) {
    console.log("Find 3")
    if (err) throw err;
    console.log(result);
    db.close();
  });
}

// Actualizar los datos
function actualizar (db, nombre, nueva_dir) {
  let dbo = db.db("mydb");
  var myquery = { name:nombre};
  var newvalues = {$set: {address: nueva_dir} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " Documentos actualizados :)");
    db.close();
  });
}

// Borrar elementos. 
function borrar ( db, nombre) {
  var dbo = db.db("mydb");
  var myquery = { name: nombre};
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
}