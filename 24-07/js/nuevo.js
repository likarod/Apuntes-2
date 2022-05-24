let cambio = document.getElementsByTagName("img");
console.log(cambio);
cambio[1].onclick = (event) => {
     event.target.src = ("img/cambio.jpg")
}
