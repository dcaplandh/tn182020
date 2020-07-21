let equipo = ["Diego","Romi"];

let fechaDeHoy = new Date("1990-12-09");
console.log(fechaDeHoy.getFullYear())

let numero = 0;
let texto = "";
let array = [];
//let objeto = {};
let booleano = false;
//comentarios
console.log("ARRAY =================")
console.log(array);
if(booleano){
    //TRUE
    console.log("el numero tiene algo")
}else{
    //FALSE
    console.log("el numero esta vacio")
}

//parse
Number(numero) + 2;

let nuevoIntegrante = 14;
nuevoIntegrante = "Jorge";
/* 

*/
equipo.push(nuevoIntegrante);

nuevoIntegrante = "Adrian";

for(let i = 0; i < equipo.length; i++){
    //MUESTRO CADA INTEGRANTE POR SU NOMBRE
    if(equipo[i] != undefined){
        //SOLO SI NO ESTA INDEFINIDO
        console.log(equipo[i]);
    }
}

//console.log(i)