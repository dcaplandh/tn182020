function iniciales(nom,ape){
    return nom[0] + ape[0];
}

function saludar(nombre,apellido,funcion){
    return "Hola " + funcion(nombre,apellido);
}

function nombreCompleto(nom,ape){
    return nom + " " + ape;
}

saludar("Juan","Lopez",iniciales);

saludar("Luis","Gomez",nombreCompleto);

var usuarios = ["Juan","Maria","Ana","Pedro"];

usuarios.map(function(){

});


var numeros = [1,2,3,4,5];

var seis = 6;

//numeros.push(seis);
nuevosNumeros = [...numeros,seis,...numeros]

console.log(nuevosNumeros);

var persona = {
    nombre : "Jorge",
    edad: 40,
    saludar: function(){
        return "Hola!";
    }
}

var {nombre,edad} = persona;

console.log(persona.nombre);
console.log(nombre);

var nombreCompleto = persona.nombre;
var edad = persona.edad;

let {patente,km} = require('./auto');