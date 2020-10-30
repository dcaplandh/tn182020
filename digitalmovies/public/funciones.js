function redireccionar(url){
    window.location.href = url;
}
/*
redireccionar("https://google.com");
redireccionar("https://github.com");
*/

var profes = document.querySelector('p.profes');
console.log(profes);

profes.innerHTML = "<span class='colorRojo'>ahora estoy en un span rojo</span>";
profes.style.fontSize = "30px";


var menu = [
    {
        texto:"Conocenos",
        href: "/conocenos"
    },
    {
        texto:"Nuestra historia",
        href: "/nuestra-historia"
    },
    {
        texto:"Fotos",
        href: "/fotos"
    }
]


//["Conocenos","Nuestra historia","Fotos","Galeria","Contacto"];

var menuDelSitio = document.querySelector("nav ul.opciones");
menu.forEach(function(opcion){
    menuDelSitio.innerHTML += "<a href='" + opcion.href +"'><li>" + opcion.texto + "</li></a>";
});

var titulo = document.querySelector("h1");

titulo.onclick = function(){
    var modal = document.querySelector(".modal");
    if(modal.style.display == "block"){
        modal.style.display = "none";
    }else{
        modal.style.display = "block";
    }
}
var notis = 0;
var buttonNotificacion = document.querySelector("button");
buttonNotificacion.onclick = function(){
    var cantidadErrores = 0;
    //tomo el texto
    var texto = document.querySelector("input");
    var alerta = document.querySelector(".alerta");
    if(texto.value != ""){
        //lo agrego al div de notificaciones
        var divNoti = document.querySelector("div.notificaciones");
        divNoti.innerHTML += "<div>"+texto.value+"</div>";
        //limpio el input
        texto.value = "";
        alerta.innerHTML = "";
        var canti = document.querySelector(".noti span");
        notis++;
        canti.innerHTML = notis;
    }else{
        cantidadErrores++;
        alerta.innerHTML = "El campo esta vacio.";
        alerta.style.color = "red";
    }
    if(cantidadErrores == 0){
        var formulario = document.querySelector("form");
        //formulario.submit();
    }
}


var lista = document.querySelectorAll("ul.lista li");
console.log(lista[2].innerHTML = "hola");

var imagenes = document.querySelectorAll("img");
imagenes.forEach(function(img){
    img.style.width = "100%";
});
