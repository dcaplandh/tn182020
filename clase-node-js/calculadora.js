const sumar = require('./sumar');
const restar = require('./restar');


function multiplicar(n1,n2){
    return n1*n2;
}
function dividir(n1,n2){
    return n1/n2;
}

var n1 = 45;
var n2 = 2;

console.log("SUMA")
sumar(n1,n2)
console.log("RESTA")
restar(n1,n2)
multiplicar(n1,n2)
dividir(n1,n2)

console.log(restar)