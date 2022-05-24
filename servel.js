const express = require('express');
const news = require("./news");
const bodyParser = require('body-parser');
const app = express()
const port = 3000

//Middleware
app.use("/", express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());

//RUTAS.
app.get('/', news.getHome);
app.get('/adios/', news.getadios)
app.get('/quemas/:seccion?/:num_noticia?', news.getquemas)
app.post("/crear", news.crearNoticias)
//POST es enviar algo.

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})