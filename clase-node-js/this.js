let personas = require('./personas');

personas.forEach(function(persona){
    console.log(persona.nombre + " es una persona.");
    if(persona.estaSoltero()){
        console.log("esta solter@.");
    }else{
        console.log("no está solter@");
    }
});

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
//const array3 = array1.concat(array2);
const array3 = [...array1,...array2]