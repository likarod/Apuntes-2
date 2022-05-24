// Elemento creado el 14/09
const express = require('express');
const bbdd = require("./modulobbdd.js");
const app = express();

app.get('/', function (req, res) {
    console.log(bbdd.readCustomers("Betty"))
    .then((datos)=>{ 
       console.log(datos)
       res.send('Usuario encontrado' +datos)
      })
    .catch((e)=> console.log(e))
   
})

app.listen(3000, () => {
   console.log("Hola")
})