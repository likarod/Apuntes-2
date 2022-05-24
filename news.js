exports.getHome =  (req, res) => {
    res
    .status(200)
    .send('¡Hola universo! Bienvenido a la página web :) ')
  };
exports.getadios = (req, res) => { 
    //Seria como: adios/?param1=""/
    console.log(req.query.param1)
    console.log(req.query)
    // adios/?param1=""&&fecha=yyy
    res
    .status(200)
    .json({mensaje: "sayonara, bb", mensaje1:"hastanunqui"})
    // .send('Bye universe!  Enviaste el parámetro: '+  req.query.param1+ " "+ req.query.fecha)
};
exports.getquemas = (req, res) => {
    //Los : significa que son los campos que van a cambiar cada vez que haya una petición.
    if(req.params.seccion && req.params.num_noticia) {
        console.log("Respuesta: "+ req.params.num_noticia)
        res.send('Kbo pues! Seccion: '+req.params.seccion+" Num noticias: "+req.params.num_noticia)
    } else if(req.params.seccion) {
        //Saca el HTML de la pagina de la sección.
        res.send("Deportes. Seccion:" + req.params.seccion)
    } else {
        res.send('Kbo pues!')
    }
};

exports.crearNoticias = (req, res) => {
    console.log(req.body)
    //En el ejercicio de la API FILM tocaría gurdarlas en el LocalStorage.
    res
    .status(200)
    .json({mensaje3: "Tu post ha sido recibido", nombre: req.body.nombre, subject: req.body.subject})
}