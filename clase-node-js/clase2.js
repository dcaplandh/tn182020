const fs = require('fs'); //file system

//TOMO LOS USUARIOS DEL JSON
let usuarios = fs.readFileSync("users.json");
//PASO LOS USUARIOS A JS
usuarios = JSON.parse(usuarios);
/*

console.log(usuarios);  

for(var i = 0; i < usuarios.length; i++){
    console.log(usuarios[i].nombre)
}
*/
//CREO UN NUEVO USUARIO
let nuevoUsuario = {
    nombre : "m",
    email: "m@m.com",
    contrasenia: "123456"
}
//LO AGREGO AL ARRAY DE USUARIOS EXISTENTES
usuarios.push(nuevoUsuario);
//CONVIERTO EL ARRAY DE USUARIOS DE JS A JSON
let usuariosJSON = JSON.stringify(usuarios);
//SOBREESCRIBO EL USERS.JSON
//fs.writeFileSync("users.json",usuariosJSON);

var persona = {
    //atributo
    nombre: "Jorge",
    edad: 30,
    //responsabilidades
    saludar : function(){
        console.log("Holis!");
    },
    navegar: (url)=>{
        console.log("Esta en "+url);
    }
}

var zapatilla = {
    precio: 1000,
    descripcion: "Es lindo",
    codigo: 00009,
    nombre: "Zapatilla",
    stock: 80,
    foto: "foto.jpg",
    hayStock: ()=>{
        return this.stock > 0;
    }
}

var zapatilla1 = {
    precio: 1000,
    descripcion: "Es lindo",
    codigo: 00009,
    nombre: "Zapatilla",
    stock: 80,
    foto: "foto.jpg",
    hayStock: ()=>{
        return this.stock > 0;
    }
}

var remera = {
    precio: 800,
    descripcion: "Es barato",
    codigo: 00010,
    nombre: "Remera",
    stock: 0,
    foto: "foto1.jpg",
    hayStock: ()=>{
        return this.stock > 0;
    }
}

var cajaAhoro = {
    cliente: 19,
    saldo: 1000,
    pin: 9876,
    restarSaldo: (nuevoSaldo)=>{
        this.saldo = nuevoSaldo;
    }
}


class alumno {
    constructor(nombreNuevo, mailNuevo) {
        this.nombre = nombreNuevo;
        this.mail = mailNuevo;
        this.faltas = 0;
        this.nuevaFalta = () => {
            this.faltas = this.faltas + 1;
        };
    }
}
var fecha = new Date();

let alberto = new alumno("Alberto","alerto@gmail.com");
let carlos = new alumno("Carlos","carlos@gmail.com");
let alumnos = [alberto,carlos];
carlos.nuevaFalta();
carlos.nuevaFalta();
carlos.nuevaFalta();
carlos.nuevaFalta();
console.log(carlos);